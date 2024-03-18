import { useEffect, useState } from 'react';
import { PriceContext } from '../../context/context';
import style from './Form.module.css';
import Wrapper from '../Wrapper/Wrapper';
import Element from '../Element/Element';
import FormSelect from '../FormSelect/FormSelect';
import FormOption from '../FormOption/FormOption';
import { checkForm } from '../checkForm';

export default function Form() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    productPrice: 0,    
    addPrice: 0,
    totalPrice: 0,
    comment: '', 
  });

  useEffect(() => {
    setForm(prev => ({ ...prev, totalPrice: form.productPrice + form.addPrice}));
  }, [form.addPrice, form.productPrice]);

  const onClickCloseButton = () => {
    const modal = document.getElementById('modal');
    modal.close();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    checkForm(e.target);
  };

  return (
    <PriceContext.Provider value={{ form, setForm }}>
      <form className={style.form} noValidate onSubmit={onSubmitForm}>
        <h1 className={style.form__title}>Title form</h1>
      <button className={style.form__closeButton} onClick={onClickCloseButton} aria-label="Закрыть форму.">&#10006;</button>

        <Wrapper>
          <input type="text" name="firstName" placeholder="First Name *" required aria-label="Ввести имя, обязательно." />
        </Wrapper>

        <Wrapper>
          <input type="text" name="last_name" placeholder="Last Name *" required aria-label="Ввести фамилию, обязательно." />
        </Wrapper>

        <Wrapper>
          <input type="email" name="email" placeholder="user@gmail.com *" required aria-label="Ввести email, обязательно." />
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
          <span className={style.form__sum}>${form.totalPrice}</span>
        </Element>

        <div className={style.form__sendButton__wrapper}>
          <button className={style.form__sendButton} aria-label="Отправить форму.">Send form</button>
        </div>
      </form>
    </PriceContext.Provider>
  );
}