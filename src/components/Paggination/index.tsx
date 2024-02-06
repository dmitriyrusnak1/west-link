import React, { ChangeEvent } from 'react';

interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, total, onChange = () => {} }) => {
  const handleNextPage = (e: ChangeEvent<HTMLInputElement>) => {
    const page = Number(e.target.value);
    if (Number.isNaN(page) || page < 1 || page > total) {
      return alert(`Please use value from 1 to ${total}`);
    }

    onChange && onChange(page);
  };

  return (
    <div className='mt-auto ml-auto mr-[40px] mb-[40px] flex flex-row items-center justify-between'>
      <span className='mr-[10px] py-[4px] leading-[22px] font-normal text-[16px]'>Page</span>
      <input
        type='number'
        max={total}
        min={1}
        value={page}
        onChange={handleNextPage}
        className='text-center border-[1px] bg-transparent border-[#CDCDD1] rounded-[10px] mr-[10px] w-[40px] h-[30px] py-[4px] px-[3px] number-input'
      />
      <span className='mr-[5px] pt-[4px] leading-[22px] font-normal text-[16px]'>of {total}</span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= total}
        className='uppercase leading-[18px] text-white font-bold text-[13px] text-center px-[15px] py-[6px] bg-[#5D5FEF] rounded-[10px] tracking-[.04em]'
      >
        next page
      </button>
    </div>
  );
};

export default Pagination;
