//styles
import './Keyboard.css';

//components
import ButtonController from '../ButtonController/ButtonController';

//icons
import display_notes_icon from './assets/icon-display-notes.svg';
import display_tools_icon from './assets/icon-display-tools.svg';
import save_icon from './assets/icon-save.svg';
import delete_icon from './assets/icon-delete.svg';
import logout_icon from './assets/icon-logout.svg';
import InputFontFamily from './InputFontFamily/InputFontFamily';
import InputFontSize from './InputFontSize/InputFontSize';
import InputColor from './InputColor/InputColor';
import JustifyController from './JustifyController/JustifyController';

//INIT STATE
const defaultNote = {
  fontSize: 11,
  fontFamily: 'OpenSans',
  justify: 'center',
  color: '#f5b7d5',
  title: 'Helloergwergw',
  text: 'This is a test\nte amo ',
  isSelected: true,
};

function Keyboard({
  save,
  logout,
  display,
  deleteNote,
  handleToggle,
  handlerKeyboard,
  currentNote = defaultNote,
}: any) {
  const { note } = currentNote;
  function handleClose(e: any) {
    e.preventDefault();
    handleToggle('keyboard');
  }
  return (
    <>
      <div className='master-controller'>
        <ButtonController
          handlerClick={() => handleToggle('sideBar')}
          src={display_notes_icon}
        />
        <ButtonController
          handlerClick={() => handleToggle('keyboard')}
          src={display_tools_icon}
        />
        <ButtonController handlerClick={save} src={save_icon} />
        <ButtonController handlerClick={deleteNote} src={delete_icon} />
        <ButtonController handlerClick={logout} src={logout_icon} />
      </div>
      <form
        className={`keyboard ${display ? 'show-keyboard' : 'hidden-keyboard'}`}
      >
        <button onClick={handleClose} className='close-keyboard'></button>
        <InputFontFamily
          handlerChange={handlerKeyboard}
          fontFamily={note.fontFamily || 'Arial'}
        />
        <InputFontSize
          fontSize={note.fontSize || 11}
          handlerChange={handlerKeyboard}
        />
        <InputColor
          handlerChange={handlerKeyboard}
          color={note.color || 'white'}
        />
        <JustifyController
          handlerChange={handlerKeyboard}
          justify={note.justify || 'left'}
        />
      </form>
    </>
  );
}

export default Keyboard;
