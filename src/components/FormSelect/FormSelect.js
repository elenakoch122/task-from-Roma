// import style from './FormSelect.module.css';
import Select from 'react-select';

export default function FormSelect() {
  const options = [
    { value: '50', label: 'Product $50' },
    { value: '100', label: 'Product $100' },
    { value: '300', label: 'Product $300' }
  ];

  const colourStyles = {
    placeholder: (defaultStyles, state) => {
      return {
        ...defaultStyles,
        color: state.isOptionSelected ? '#bbb' : 'red',
      }
    },
    control: (defaultStyles, state) => ({
      ...defaultStyles,
      border: '1px solid #bbb',
      borderRadius: '3px',
      outline: state.isFocused ? '2px solid #89ccf3' : 'none',
      boxShadow: 'none',
    }),
  };  

  const theme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#89ccf3',
      primary25: '#d9ffff',
    },
  });
  
  return (
    <>
      <Select
        className="select-container"
        classNamePrefix="select"
        options={options}
        styles={colourStyles}
        placeholder="Select product type"
        components={{IndicatorSeparator: null }}
        theme={theme}
      />
    </>
  );
}