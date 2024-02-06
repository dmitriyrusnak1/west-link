import cn from '../../utils/cn';

export default function Checkbox({ id, checked, setChecked, label, ...props }) {
  return (
    <div className='ml-[40px] checkbox-wrapper'>
      <label className='flex align-center justify-center' htmlFor={id}>
        <input
          className={cn({
            checked: checked,
          })}
          type='checkbox'
          id={id}
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
          {...props}
        />
        <span className='ml-[9px] leading-[22px] font-normal text-[16px] text-right uppercase'>{label}</span>
      </label>
    </div>
  );
}
