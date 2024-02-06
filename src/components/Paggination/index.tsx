import React, { useState, ChangeEvent, useEffect } from 'react';
import debounce from 'lodash.debounce';

interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, total, onChange = () => {} }) => {
  const [value, setValue] = useState(page || 1);

  useEffect(() => {
    page !== value && setValue(page);
  }, [page]);

  const handlePage = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const nextPage = Number(e.target.value);
    if (Number.isNaN(nextPage) || nextPage < 1 || nextPage > total) {
      //reset user input to page value
      setValue(page);
      alert(`Please use value from 1 to ${total}`);
      return;
    }

    onChange && onChange(nextPage);
  }, 500);

  const handleNextPage = () => {
    setValue(page + 1);
    onChange && onChange(page + 1);
  };

  return (
    <div className='mt-auto ml-auto mr-[40px] mb-[40px] flex flex-row items-center justify-between'>
      <span className='mr-[10px] py-[4px] leading-[22px] font-normal text-[16px]'>Page</span>
      <input
        type='number'
        max={total}
        min={1}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
          handlePage(e);
        }}
        className='text-center border-[1px] bg-transparent border-[#CDCDD1] rounded-[10px] mr-[10px] w-[40px] h-[30px] py-[4px] px-[3px] number-input'
      />
      <span className='mr-[5px] pt-[4px] leading-[22px] font-normal text-[16px]'>of {total}</span>
      <button
        onClick={handleNextPage}
        disabled={page >= total}
        className='uppercase leading-[18px] text-white font-bold text-[13px] text-center px-[15px] py-[6px] bg-[#5D5FEF] rounded-[10px] tracking-[.04em]'
      >
        next page
      </button>
    </div>
  );
};

export default Pagination;
