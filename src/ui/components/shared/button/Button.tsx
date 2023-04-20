import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import style from '../../../../styles/Button.module.scss';

export type ButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  onClick?: () => void;
  className?: string;
  title?: string;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  disabled,
  className,
  title,
}: ButtonPropsType) => {
  return (
    <button
      className={`${className} ${style.btn}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
