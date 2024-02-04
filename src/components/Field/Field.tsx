import { ChangeEventHandler } from 'react';
import './Field.css';

interface Props {
  src: string;
  type: string;
  name: string;
  title: string;
  value: string;
  error: string;
  onChange: ChangeEventHandler;
}

function Field({ error, title, value, onChange, src, type, name }: Props) {
  return (
    <label className='custom-field-wrapper'>
      <span className='input-description'>
        {title}{' '}
        <span className='error-msg-field'>{error && ' - ' + error}</span>
      </span>
      <div className='field-wrapper'>
        <input
          value={value}
          type={type}
          onChange={onChange}
          className='custom-field'
          name={name}
        />
        <img className='image-field' src={src} />
      </div>
    </label>
  );
}

export default Field;
