import { useEffect, useState } from 'react';
import { PriceContext } from '../../context/context';
import { checkForm } from '../checkForm';
import style from './Form.module.css';
import Element from '../Element/Element';
import FormSelect from '../FormSelect/FormSelect';
import FormOption from '../FormOption/FormOption';

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

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    const wrapper = e.target.closest('.wrapper');
    value ? wrapper.classList.add('filled') : wrapper.classList.remove('filled');
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    checkForm(e.target, form);
  };

  return (
    <PriceContext.Provider value={{ form, setForm }}>
      <form className={style.form} method='post' noValidate onSubmit={onSubmitForm}>
        <h1 className={style.form__title}>Title form</h1>
        <button className={style.form__closeButton} onClick={onClickCloseButton} aria-label="Закрыть форму.">&#10006;</button>

        <div className='wrapper'>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={onChangeInput}          
            placeholder="First Name *"
            required aria-label="Ввести имя, обязательно."
          />
        </div>

        <div className='wrapper'>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={onChangeInput}
            placeholder="Last Name *"
            required aria-label="Ввести фамилию, обязательно."
          />
        </div>

        <div className='wrapper'>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChangeInput}
            placeholder="user@gmail.com *"
            required aria-label="Ввести email, обязательно."
          />
        </div>

        <Element text="Product type *">
          <div className='wrapper'>
            <FormSelect />
          </div>
        </Element>

        <Element text="Additinal feature for $100">
          <FormOption value={100} />
        </Element>

        <Element text="Additinal feature for $200">
          <FormOption value={200} />
        </Element>

        <div className='wrapper'>
          <textarea
            rows={4}
            name='comment'
            value={form.comment}
            onChange={onChangeInput}
            placeholder="Type your comment"
          ></textarea>
        </div>

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