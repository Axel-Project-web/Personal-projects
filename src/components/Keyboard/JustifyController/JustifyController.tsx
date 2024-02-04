import { MouseEventHandler } from 'react';
import './JustifyController.css';

interface PropsInterface {
  handlerChange: MouseEventHandler;
  justify: string;
}

function JustifyController({ handlerChange, justify }: PropsInterface) {
  return (
    <div className='justify-keyboard'>
      <button
        name='justify'
        className={`btn-justify ${
          justify === 'left' ? 'justify-left-selected' : 'justify-left'
        }`}
        type='button'
        value='left'
        onClick={handlerChange}
      ></button>
      <button
        name='justify'
        className={`btn-justify ${
          justify === 'center' ? 'justify-center-selected' : 'justify-center'
        }`}
        type='button'
        value='center'
        onClick={handlerChange}
      ></button>
      <button
        name='justify'
        className={`btn-justify ${
          justify === 'right' ? 'justify-right-selected' : 'justify-right'
        }`}
        type='button'
        value='right'
        onClick={handlerChange}
      ></button>
    </div>
  );
}

export default JustifyController;
