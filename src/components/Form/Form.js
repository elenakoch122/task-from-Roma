import style from './Form.module.css';
import Wrapper from '../Wrapper/Wrapper';
import Element from '../Element/Element';

export default function Form() {
  return (
    <form className={style.form}>
      <h1 className={style.form__title}>Title form</h1>
      <button className={style.form__closeButton}>&#10006;</button>

      <Wrapper isValid={false}>
        <input type="text" placeholder="First Name *" />
      </Wrapper>

      <Wrapper>
        <input type="text" placeholder="Last Name *" />
      </Wrapper>

      <Wrapper isValid={false}>
        <input type="email" placeholder="user@gmail.com *" />
      </Wrapper>

      <Element text="Product type *">
        <Wrapper isValid={false}>
          {/* установить react-select */}
          <select name="product" placeholder="Select product type">
            <option value="">Select product type</option>
            <option value="50">Product $50</option>
            <option value="100">Product $100</option>
            <option value="300">Product $300</option>
          </select>
        </Wrapper>
      </Element>

      <Element text="Additinal feature for $100">
        Switch
      </Element>

      <Element text="Additinal feature for $200">
        Switch
      </Element>

      <textarea placeholder="Type your comment" rows={4}></textarea>

      <Element text="Total price">
        $0
      </Element>

      <div className={style.form__sendButton__wrapper}>
        <button className={style.form__sendButton}>Send form</button>
      </div>
    </form>
  );
}