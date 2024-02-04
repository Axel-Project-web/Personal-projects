import { MouseEventHandler } from 'react';
import './ButtonController.css';

interface PropsInterface {
  src: string;
  handlerClick: MouseEventHandler;
}

function ButtonController({ src, handlerClick }: PropsInterface) {
  return (
    <button onClick={handlerClick} className='controller-btn'>
      <img className='controller-btn-image' src={src} />
    </button>
  );
}

export default ButtonController;
