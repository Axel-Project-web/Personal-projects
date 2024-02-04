//react
import { ChangeEvent, FormEvent, useState } from 'react';

//react router dom
import { redirect, useNavigate } from 'react-router-dom';

//custom components
import Field from '../../components/Field/Field';
import Button from '../../components/Button/Button';
import GenericForm from '../../components/GenericForm/GenericForm';
import FieldPassword from '../../components/FieldPassword/FieldPassword';

//hooks
import { useLogin } from '../../hooks/useLogin';

//icons
import icon_email from './assets/icon-email.svg';

//styles
import './Login.css';


async function getToken() {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await fetch(`http://127.0.0.1:1234/token/${token}`);
      if (!response.ok) throw response;
      const json = await response.json();
      if (json.userRegistered) return redirect('/bloc');
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
}

function Login() {

  const [goto, form, error, handleSubmit, handlerChange] = useLogin();

  return (
    <div className='login-wrapper'>
      <GenericForm
        redirectMsg='Don´t have an account?'
        handleSubmit={handleSubmit}
        subject={'Enter your login data'}
        title={'Login'}
        goto={goto}
      >
        <Field
          error={error.email}
          type='text'
          name='email'
          title='email'
          src={icon_email}
          value={form.email.value}
          onChange={handlerChange}
        />
        <FieldPassword
          error={error.password}
          name='password'
          title='password'
          value={form.password.value}
          onChange={handlerChange}
        />
        <Button>Login</Button>
      </GenericForm>
    </div>
  );
}

export { getToken };
export default Login;
