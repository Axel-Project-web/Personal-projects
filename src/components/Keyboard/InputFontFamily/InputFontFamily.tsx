import { ChangeEventHandler } from 'react';
import './InputFontFamily.css';

interface PropsInterface {
  handlerChange: ChangeEventHandler;
  fontFamily: string;
}

function InputFontFamily({ fontFamily, handlerChange }: PropsInterface) {
  return (
    <div className='input-font-family-wrapper'>
      <select
        onChange={handlerChange}
        className='input-font-family'
        name={'fontFamily'}
        value={fontFamily}
      >
        <option value='Roboto'>Roboto</option>
        <option value='Arial'>Arial</option>
        <option value='OpenSans'>OpenSans</option>
      </select>
    </div>
  );
}

export default InputFontFamily;
