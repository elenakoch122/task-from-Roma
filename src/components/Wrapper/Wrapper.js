import style from './Wrapper.module.css';

export default function Wrapper({ isValid = true, children }) {
  return (
    <div className={isValid ? '' : style.error}>
      {children}
    </div>
  );
}