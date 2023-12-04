import React from "react";
import Select, {StylesConfig} from 'react-select';

const colourStyles: StylesConfig<any, true> = {
  container: (styles) => ({...styles, width: '100%'}),
  control: (styles) => ({...styles, backgroundColor: 'white'}),
  option: (styles, {data, isDisabled, isFocused, isSelected}) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color.color
        : isFocused
          ? 'rgba(238, 239, 241, .5)'
          : undefined,
      color: isSelected
        ? 'black'
        : data.color.color,
      cursor: 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color.color
            : 'rgba(235, 235, 235, .5)'
          : undefined,
      },
    };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: 'rgba(238, 239, 241, .5)',
    };
  },
  multiValueLabel: (styles, {data}) => ({
    ...styles,
    color: data.color.color,
  }),
  multiValueRemove: (styles, {data}) => ({
    ...styles,
    color: data.color.color,
    ':hover': {
      backgroundColor: data.color.color,
      color: 'white',
    },
  }),
};

type TagMultiSelectProps = {
  options: any[],
  value: any,
  onChange: any
}

const TextMultiSelect = ({options, value, onChange}: TagMultiSelectProps) => {

  return (
    <Select
      closeMenuOnSelect={false}
      value={value}
      onChange={onChange}
      isMulti
      options={options}
      styles={colourStyles}
    />
  )
}

export default TextMultiSelect