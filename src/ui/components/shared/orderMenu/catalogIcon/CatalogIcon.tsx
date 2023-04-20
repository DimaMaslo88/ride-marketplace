import React from 'react';
import { UniversalIconType } from '../../../../../utils/types';

export const CatalogIcon = ({
  className,
  onClick,
  variant = 'default',
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
        d='M16.6667 16H7.33333V14.4H16.6667V16ZM16.6667 12.8H7.33333V11.2H16.6667V12.8ZM16.6667 9.6H7.33333V8H16.6667V9.6ZM5 20L6.16667 18.8L7.33333 20L8.5 18.8L9.66667 20L10.8333 18.8L12 20L13.1667 18.8L14.3333 20L15.5 18.8L16.6667 20L17.8333 18.8L19 20V4L17.8333 5.2L16.6667 4L15.5 5.2L14.3333 4L13.1667 5.2L12 4L10.8333 5.2L9.66667 4L8.5 5.2L7.33333 4L6.16667 5.2L5 4V20Z'
        fill={color}
      />
    </svg>
  );
};
