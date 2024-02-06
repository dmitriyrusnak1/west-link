import React, { useState, ChangeEvent, HTMLProps } from 'react';
import cn from '../../utils/cn';
import classes from './style.module.css';

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  id: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, label, ...props }) => {
  const [value, setChecked] = useState<boolean>(checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) => !prev);
    onChange && onChange(e);
  };

  return (
    <div className={`ml-[40px] ${classes['checkbox-wrapper']}`}>
      <label className='flex align-center justify-center' htmlFor={id}>
        <input
          className={cn({
            [`${classes['checked']}`]: value,
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
};

export default Checkbox;
