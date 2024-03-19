const url = '';

export const checkForm = (form, formData) => {
  [...form.elements].forEach(el => checkEl(el));
  
  if (form.checkValidity()) {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }
};

const checkEl = (el) => {
  const { name, value, type } = el;

  if (!name || name === 'comment') return;  
  if (!value) return addError(el);
  if (type === 'email' && !validateEmail(value)) return addError(el, type);

  deleteError(el);
};

const addError = (el, type = '') => {
  const error = el.closest('.error');
  const wrapper = el.closest('.wrapper');

  if (!error) wrapper.classList.add('error');
  if (!type && el.type === 'email') wrapper.classList.remove('error__email');
  if (type === 'email') wrapper.classList.add('error__email');
};

const deleteError = (el) => {
  const error = el.closest('.error');
  if (error) {
    error.classList.remove('error');
    if (el.type === 'email') error.classList.remove('error__email');
  }
  
};

const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
};