import style from './Element.module.css';

export default function Element({ text, children }) {
  return (
    <div className={style.wrapper}>
      <span className={style.caption}>{text}</span>
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
}