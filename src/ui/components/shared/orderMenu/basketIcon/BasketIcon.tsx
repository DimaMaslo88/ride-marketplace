import React from 'react';
import { UniversalIconType } from '../../../../../utils/types';

export const BasketIcon = ({
  className,
  onClick,
  variant,
}: UniversalIconType) => {
  const color = variant === 'active' ? 'white' : '#5D5165';
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <path
        d='M9 16.5C8.175 16.5 7.5075 17.175 7.5075 18C7.5075 18.825 8.175 19.5 9 19.5C9.825 19.5 10.5 18.825 10.5 18C10.5 17.175 9.825 16.5 9 16.5ZM4.5 4.5V6H6L8.7 11.6925L7.6875 13.53C7.5675 13.74 7.5 13.9875 7.5 14.25C7.5 15.075 8.175 15.75 9 15.75H18V14.25H9.315C9.21 14.25 9.1275 14.1675 9.1275 14.0625L9.15 13.9725L9.825 12.75H15.4125C15.975 12.75 16.47 12.4425 16.725 11.9775L19.41 7.11C19.47 7.005 19.5 6.8775 19.5 6.75C19.5 6.3375 19.1625 6 18.75 6H7.6575L6.9525 4.5H4.5ZM16.5 16.5C15.675 16.5 15.0075 17.175 15.0075 18C15.0075 18.825 15.675 19.5 16.5 19.5C17.325 19.5 18 18.825 18 18C18 17.175 17.325 16.5 16.5 16.5Z'
        fill={color}
      />
    </svg>
  );
};
