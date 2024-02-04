import { ChangeEventHandler } from 'react';
import './InputFontSize.css';

interface PropsInterface {
  handlerChange: ChangeEventHandler;
  fontSize: string;
}

function InputFontSize({ handlerChange, fontSize }: PropsInterface) {
  return (
    <div className='input-font-size-wrapper'>
      <input
        onChange={handlerChange}
        className='input-font-size'
        type='number'
        value={fontSize}
        name='fontSize'
      />
    </div>
  );
}

export default InputFontSize;
