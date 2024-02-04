import { useState } from 'react';

import { ChangeEventHandler } from 'react';
//styles
import './FieldPassword.css';

//interfaz
interface Props {
  title: string;
  value: string;
  name: string;
  onChange?: ChangeEventHandler;
  error: string;
}

function FieldPassword({ error, title, value, onChange, name }: Props) {
  const [type, setType] = useState('password');
  return (
    <label className='field-password-wrapper'>
      <span className='password-input-description'>
        {title}{' '}
        <span className='error-msg-field'>{error && ' - ' + error}</span>
      </span>
      <input
        className={`field-password`}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
      <button
        type='button'
        onClick={() =>
          setType(prev => (prev === 'password' ? 'text' : 'password'))
        }
        className={`btn-visibility ${
          type === 'password' ? 'is-visible' : 'is-hidden'
        }`}
      ></button>
    </label>
  );
}

export default FieldPassword;
