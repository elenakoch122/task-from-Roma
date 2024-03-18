import { useEffect, useState } from 'react';
import { PriceContext } from '../../context/context';
import style from './Form.module.css';
import Wrapper from '../Wrapper/Wrapper';
import Element from '../Element/Element';
import FormSelect from '../FormSelect/FormSelect';
import FormOption from '../FormOption/FormOption';

export default function Form() {
  const [price, setPrice] = useState(0);
  const [add, setAdd] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(price + add);
  }, [add, price]);

  const onClickCloseButton = () => {
    const modal = document.getElementById('modal');
    modal.close();
  };

  return (
    <PriceContext.Provider value={{ price, setPrice, add, setAdd }}>
      <form className={style.form}>
        <h1 className={style.form__title}>Title form</h1>
        <button className={style.form__closeButton} onClick={onClickCloseButton}>&#10006;</button>

        <Wrapper>
          <input type="text" placeholder="First Name *" required />
        </Wrapper>

        <Wrapper>
          <input type="text" placeholder="Last Name *" required />
        </Wrapper>

        <Wrapper>
          <input type="email" placeholder="user@gmail.com *" required />
        </Wrapper>

        <Element text="Product type *">
          <Wrapper>
            <FormSelect />
          </Wrapper>
        </Element>

        <Element text="Additinal feature for $100">
          <FormOption value={100} />
        </Element>

        <Element text="Additinal feature for $200">
          <FormOption value={200} />
        </Element>

        <textarea placeholder="Type your comment" rows={4}></textarea>

        <Element text="Total price">
          <span className={style.form__sum}>${total}</span>
        </Element>

        <div className={style.form__sendButton__wrapper}>
          <button className={style.form__sendButton}>Send form</button>
        </div>
      </form>
    </PriceContext.Provider>
  );
}