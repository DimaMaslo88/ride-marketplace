import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import s from '../../styles/utils/Input.module.scss';

export type InputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  // control: any
  // register: any,
  type?: string;
  errors?: any;

  maxLength?: number;
  id?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Input = React.memo(
  ({
    // register,

    type,
    errors,
    className,
    children,

    // control,
    maxLength,
    id,
    value,
    onChange,
    ...props
  }: InputPropsType) => {
    console.log('input');

    return (
      <>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`${className}  ${errors ? 'input-error' : ''}`}
          {...props}
          maxLength={maxLength}
        />
        {errors && <span className={s.inputError}>{errors.message}</span>}
        {Boolean(children) && children}
      </>
    );
  }
);
