import GenericForm from '../../components/GenericForm/GenericForm';
import Field from '../../components/Field/Field';
import FieldPassword from '../../components/FieldPassword/FieldPassword';
import Button from '../../components/Button/Button';

//icons
import icon_email from '../../assets/icon-email.svg';
import icon_phone from '../../assets/icon-phone.svg';

//styles
import './SingUp.css';

//hooks
import useSingup from '../../hooks/useSingup';

function SingUp() {
  const [result, goto, error, form, handleSubmit, handlerChange] = useSingup();

  return (
    <div className='singup-wrapper'>
      <GenericForm
        goto={goto}
        title='Singup'
        handleSubmit={handleSubmit}
        subject='create an account'
        redirectMsg='Already have an account?'
      >
        <Field
          error={error.email ? error.email : ''}
          type='text'
          name='email'
          title='email'
          src={icon_email}
          value={form.email.value}
          onChange={handlerChange}
        />
        <Field
          error={error.phone ? error.phone : ''}
          type='phone'
          name='phone'
          title='phone'
          src={icon_phone}
          value={form.phone.value}
          onChange={handlerChange}
        />
        <FieldPassword
          error={error.password ? error.password : ''}
          name='password'
          title='password'
          value={form.password.value}
          onChange={handlerChange}
        />
        <FieldPassword
          error={error.rePassword ? error.rePassword : ''}
          name='rePassword'
          title='repeat password'
          value={form.rePassword.value}
          onChange={handlerChange}
        />
        {!result ? (
          <Button>Sing up</Button>
        ) : (
          <div className='success'>
            Registro completado. Será redirigido al login
          </div>
        )}
      </GenericForm>
    </div>
  );
}

export default SingUp;
