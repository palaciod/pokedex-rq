import React, { ReactNode } from 'react';
import useTextFieldStyles from './TextField.styles';

type TextFieldProps = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
};

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  icon,
}) => {
    const classes  = useTextFieldStyles();
  return (
    <label className={classes.label}>
      {icon && <span>{icon}</span>}
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={classes.input}
      />
    </label>
  );
};
