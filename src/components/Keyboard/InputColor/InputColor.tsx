import { ChangeEventHandler } from 'react';
import './InputColor.css';

interface PropsInterface {
  handlerChange: ChangeEventHandler;
  color: string;
}

function InputColor({ handlerChange, color }: PropsInterface) {
  return (
    <input
      onChange={handlerChange}
      className='input-font-color'
      type='color'
      value={color}
      name='color'
    />
  );
}

export default InputColor;
