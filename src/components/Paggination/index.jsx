export default function Pagination({ page, total, onChange = () => {} }) {
  return (
    <div className='mt-auto ml-auto mr-[40px] mb-[40px] flex flex-row items-center justify-between'>
      <span className='mr-[10px] py-[4px] leading-[22px] font-normal text-[16px]'>Page</span>
      <div className='text-center border-[1px] border-[#CDCDD1] rounded-[10px] mr-[10px] w-[40px] h-[30px] py-[4px] px-[3px]'>
        <span className='leading-[22px] font-normal text-[16px]'>{page}</span>
      </div>
      {/* <input
        type='number'
        max={total}
        min={1}
        className='text-center border-[1px] bg-transparent border-[#CDCDD1] rounded-[10px] mr-[10px] w-[40px] h-[30px] py-[4px] px-[3px]'
      /> */}
      <span className='mr-[5px] pt-[4px] leading-[22px] font-normal text-[16px]'>of {total}</span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= total}
        className='uppercase leading-[18px] text-white font-bold text-[13px] text-center px-[15px] py-[6px] bg-[#5D5FEF] rounded-[10px]'
      >
        next page
      </button>
    </div>
  );
}
