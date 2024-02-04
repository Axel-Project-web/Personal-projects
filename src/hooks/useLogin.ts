//react
import { useState, ChangeEvent, FormEvent } from "react";

//react-router-dom
import { useNavigate } from "react-router-dom";


//regexp
const regexp: any = {
  email: /^[a-zA-z0-9\_\.]+\@[a-zA-z0-9\_\.]+$/,
  password: /^[a-zA-z0-9\_\.]+$/,
};

interface hasErrorInterface {
  email?: string;
  password?: string;
}

//url
const URL = 'http://127.0.0.1:1234/user';

//types
import { FormLoginType, FormLoginErrorType, GotoType, ReturnTypeHookLogin } from "../types/types";

//init state
const INIT_FORM: FormLoginType = {
  email: {
    value: '',
    isValid: false
  },
  password: {
    value: '',
    isValid: false
  }
}

const INIT_ERROR: FormLoginErrorType = {
  email: '',
  password: ''
}

function useLogin(): ReturnTypeHookLogin {
  const [form, setForm] = useState(INIT_FORM);
  const [error, setError] = useState(INIT_ERROR);
  const navigation = useNavigate();

  function handlerChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: {
        value,
        isValid: regexp[name].test(value),
      },
    });
  }

  const goto: GotoType = {
    handleNavigation: () => navigation('/singup'),
    text: 'Singup',
  };

  async function login() {
    const { email, password } = form;
    const init = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    };
    try {
      const response = await fetch(URL, init);
      if (!response.ok) throw response;
      const json = await response.json();
      localStorage.removeItem('token');
      localStorage.setItem('token', json.token);
      navigation('/bloc');
    } catch (err: any) {
      const json = await err.json();
      setError({ ...error, ...json });
      setTimeout(() => setError(INIT_ERROR), 3000);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const hasError: hasErrorInterface = {};
    const { email, password } = form;
    if (email.isValid && password.isValid) return login();
    if (!email.isValid) hasError.email = 'Email inválido.';
    if (!password.isValid) hasError.password = 'Clave inválida.';
    setError({ ...error, ...hasError });
    setTimeout(() => setError(INIT_ERROR), 2000);
  }

  return [goto, form, error, handleSubmit, handlerChange];
}

export { useLogin };