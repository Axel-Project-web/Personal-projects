import { ChangeEvent, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const regexp: any = {
  email: /^[a-zA-z0-9\_\.]+\@[a-zA-z0-9\_\.]+$/,
  phone: /^[a-zA-z0-9]{11,15}$/,
  password: /^[a-zA-z0-9\_\.]+$/,
  rePassword: /^[a-zA-z0-9\_\.]+$/,
};

//LocalTypes
import { FormSingupType, ReturnTypeHookSingup, ErrorType, GotoType, KeyOfFormType } from '../types/types';

const init_error = {
  email: '',
  phone: '',
  password: '',
  rePassword: '',
};

const init_form: FormSingupType = {
  email: {
    value: '',
    isValid: false,
  },
  phone: {
    value: '',
    isValid: false,
  },
  password: {
    value: '',
    isValid: false,
  },
  rePassword: {
    value: '',
    isValid: false,
  },
};

function useSingup(): ReturnTypeHookSingup {
  const [form, setForm] = useState(init_form);
  const [error, setError] = useState(init_error);
  const [result, setResult] = useState<boolean>(false);
  const navigation = useNavigate();

  function handlerChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setForm({
      ...form,
      [name]: {
        value,
        isValid: regexp[name].test(value),
      },
    });
  }

  const goto: GotoType = {
    handleNavigation: () => navigation('/login'),
    text: 'Login',
  };

  function handleSubmit(e: FormEvent<Element>) {
    e.preventDefault();
    const hasError: ErrorType = {};
    const { email, phone, password, rePassword } = form;
    if (!email.isValid) hasError.email = 'Email inválido.';
    if (!phone.isValid) hasError.phone = 'Número inválido.';
    if (!password.isValid) hasError.password = 'Caracter inválido.';
    if (!rePassword.isValid) hasError.rePassword = 'Caracter inválido.';
    if (
      password.isValid &&
      rePassword.isValid &&
      password.value !== rePassword.value
    ) {
      hasError.password = hasError.rePassword = 'Las claves no coinciden.';
    }
    if (Object.keys(hasError).length) {
      setError({ ...error, ...hasError });
      setTimeout(() => setError(init_error), 2000);
    } else {
      const dataToSend: any = {};
      let key: KeyOfFormType;
      for (key  in form) {
        if (key !== 'rePassword') dataToSend[key] = form[key].value;
      }
      fetch('http://127.0.0.1:1234/create', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then(response => response.json())
        .then(json => {
          if (json.hasOwnProperty('email') || json.hasOwnProperty('phone')) {
            setError({ ...error, ...json });
          } else {
            setResult(true);
            setTimeout(() => {
              setResult(false);
              navigation('/login');
            }, 3000);
          }
          setForm(init_form);
          setTimeout(() => setError(init_error), 3000);
        });
    }
  }

  return [result, goto, error, form, handleSubmit, handlerChange];
}

export default useSingup;
