import { useState } from 'react';
import cn from '../../utils/cn';

export default function Checkbox({ id, checked, onChange, label, ...props }) {
  const [value, setChecked] = useState(checked);

  const handleChange = (e) => {
    setChecked((prev) => !prev);
    onChange && onChange(e);
  };

  return (
    <div className='ml-[40px] checkbox-wrapper'>
      <label className='flex align-center justify-center' htmlFor={id}>
        <input
          className={cn({
            checked: value,
          })}
          type='checkbox'
          id={id}
          checked={value}
          onChange={handleChange}
          {...props}
        />
        <span className='ml-[9px] leading-[22px] font-normal text-[16px] text-right uppercase'>
          {label}
        </span>
      </label>
    </div>
  );
}
