import { useContext, useState } from 'react';
import { PriceContext } from '../../context/context';
import Switch from "react-switch";

export default function FormOption({ value }) {
  const [ isChecked, setIsCheked ] = useState(false);
  const { setAdd } = useContext(PriceContext);

  const onChangeOption = () => {
    setIsCheked(!isChecked);
    !isChecked ? setAdd(a => a + value) : setAdd(a => a - value);
  };

  return (
    <Switch
      width={40}
      height={20}
      onChange={onChangeOption}
      checked={isChecked}
      offColor='#bbb'
      onColor='#090'
      offHandleColor='#ddd'
      onHandleColor='#ddd'
      handleDiameter={16}
      uncheckedIcon={false}
      checkedIcon={false}
    />
  );
}