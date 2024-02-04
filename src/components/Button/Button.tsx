//styles
import './Button.css';

//react
import { PropsWithChildren } from 'react';

function Button({ children }: PropsWithChildren) {
  return (
    <button className='btn-action' type='submit'>
      {children}
    </button>
  );
}

export default Button;
