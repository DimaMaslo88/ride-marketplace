import React, {
  ChangeEvent,
  DetailedHTMLProps,
  SelectHTMLAttributes,
} from 'react';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];

  onChangeOption?: (option: any) => void;
  className: string;
};
export const Select: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  className,
  ...props
}) => {
  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <option key={o + '-' + i} value={o}>
          {' '}
          {o}{' '}
        </option>
      ))
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
    // onChange, onChangeOption
  };
  return (
    <select className={className} onChange={onChangeCallback} {...props}>
      {mappedOptions}
    </select>
  );
};
