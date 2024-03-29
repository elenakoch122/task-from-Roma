import { useContext } from 'react';
import { PriceContext } from '../../context/context';
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
        color: '#bbb',
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

  const { setForm } = useContext(PriceContext);

  const onChangeSelect = (e) => setForm(prev => ({ ...prev, productPrice: +e.value }));
  
  return (
    <>
      <Select
        className="select-container"
        classNamePrefix="select"
        name='productPrice'
        options={options}
        styles={colourStyles}
        placeholder="Select product type"
        components={{IndicatorSeparator: null }}
        theme={theme}
        required
        onChange={onChangeSelect}
      />
    </>
  );
}