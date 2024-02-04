//styles
import './GenericForm.css';

//react
import { FormEventHandler, MouseEventHandler, ReactNode } from 'react';

//react-router-dom
import { Form } from 'react-router-dom';

//types
import { GotoType } from '../../types/types';

//interfaz
interface Props {
  title: string;
  goto: GotoType;
  subject: string;
  children: ReactNode;
  redirectMsg: string;
  handleSubmit: FormEventHandler;
}

function GenericForm({
  goto,
  title,
  subject,
  children,
  redirectMsg,
  handleSubmit,
}: Props) {
  return (
    <div className='form-wrapper'>
      <div className='title-wrapper'>
        <h1 className='title-generic-form'>{title}</h1>
        <h4 className='sub-title-generic-form'>{subject}</h4>
      </div>
      <Form className='react-router-form' onSubmit={handleSubmit}>
        {children}
      </Form>
      <div className='navbar-generic-form'>
        <span>{redirectMsg}</span>
        <button onClick={goto.handleNavigation} className='btn-goto-section'>
          {goto.text}
        </button>
      </div>
    </div>
  );
}

export default GenericForm;
