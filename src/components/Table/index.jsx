import PlusIcon from '../../assets/plus.svg';

export default function Table() {
  return (
    <div className='mt-[30px] mx-[40px]'>
      <div className='flex flex-row items-center justify-center'>
        <div className='leading-[41px text-black font-bold text-[34px]'>Users</div>
        <div className='ml-[40px]'>
          <input type='checkbox' id='deleted' />
          <label
            htmlFor='deleted'
            className='ml-[9px] leading-[22px] font-normal text-[16px] text-right'
          >
            Deleted
          </label>
        </div>
        <button className='ml-auto flex items-center justify-center uppercase py-[6px] pl-[10px] pr-[20px] leading-[29px] text-white font-bold text-[21px] text-center bg-[#5D5FEF] rounded-[10px]'>
          <img src={PlusIcon} alt="" />
          add user
        </button>
      </div>
    </div>
  );
}
