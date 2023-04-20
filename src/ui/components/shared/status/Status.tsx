import React from 'react';
import cn from 'classnames';

type StatusType = {
  className: string;
  children?: any;
};
export const Status = ({
  className = 'consideration',
  children,
  ...props
}: StatusType) => {
  return (
    <span className={cn('status', className)} {...props}>
      {children}
    </span>
  );
};
