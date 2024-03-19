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
  if (!el.name || el.name === 'comment') return;
  if (!el.value) return addError(el);
  if (el.type === 'email' && !validateEmail(el.value)) return addError(el);
  deleteError(el);
};

const addError = (el) => {
  const error = el.closest('.error');
  if (!error) el.closest('.wrapper').classList.add('error');
};

const deleteError = (el) => {
  const error = el.closest('.error');
  if (error) error.classList.remove('error');
};

const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
};