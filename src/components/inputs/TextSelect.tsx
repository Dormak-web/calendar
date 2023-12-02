import React from "react";
import Select, {StylesConfig} from "react-select";
import InputLabel from "components/InputLabel";

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<any> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color
        : isFocused
          ? 'rgba(238, 239, 241, .5)'
          : undefined,
      color: isSelected
        ? 'black'
        : data.color,
      cursor: 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: isSelected
          ? data.color
          : 'rgba(235, 235, 235, .5)'
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

type TextSelectProps = {
  options: any[]
  value?: any
  onChange?: any
}

const TextSelect = ({options, value, onChange}: TextSelectProps) => {
  return (
    <InputLabel label='Color'>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        styles={colourStyles}
      />
    </InputLabel>
  )
}

export default TextSelect