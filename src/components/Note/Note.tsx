//styles
import './Note.css';
//react
import { useState, useEffect, ChangeEventHandler, MouseEventHandler  } from 'react';
//icons
import icon_save from '../../assets/icon-save.svg';
import icon_delete from '../../assets/icon-delete.svg';
import icon_logout from '../../assets/icon-logout.svg';
import icon_account from '../../assets/icon-account.svg';
import ButtonController from '../ButtonController/ButtonController';

interface PropsInterface {
  note: any;
  email: string;
  save: MouseEventHandler;
  logout: MouseEventHandler;
  deleteNote: MouseEventHandler;
  handlerKeyboard: ChangeEventHandler;
}

function Note({
  note,
  save,
  email,
  logout,
  deleteNote,
  handlerKeyboard,
}: PropsInterface) {
  const [noteConfig, setNoteConfig] = useState(note);
  let dinamicStyles;
  if (noteConfig) {
    dinamicStyles = {
      fontFamily: noteConfig.fontFamily,
      fontSize: parseInt(noteConfig.fontSize),
      color: noteConfig.color,
      textAlign: noteConfig.justify,
    };
  }

  useEffect(() => setNoteConfig(note), [note]);

  return (
    <div className='main-content-wrapper'>
      <div className='data-action'>
        <div className='user-data'>
          <img className='user-icon' src={icon_account} />
          <div className='point-decoration'></div>
          <span className='user-email'>{email}</span>
        </div>
        <div className='keyboard-field'>
          <ButtonController src={icon_save} handlerClick={save} />
          <ButtonController src={icon_delete} handlerClick={deleteNote} />
          <ButtonController src={icon_logout} handlerClick={logout} />
        </div>
      </div>
      <form onSubmit={e => e.preventDefault()} className='note-wrapper'>
        {noteConfig ? (
          <>
            <input
              maxLength={13}
              placeholder='title here...'
              className='note-title'
              type='text'
              name='title'
              onChange={handlerKeyboard}
              value={noteConfig.title}
            />
            <textarea
              style={dinamicStyles}
              name='text'
              placeholder='write something'
              className='note-field'
              onChange={handlerKeyboard}
              value={noteConfig.text}
            ></textarea>
          </>
        ) : (
          <h1 className='empty-list-msg'>Your notes will appear here</h1>
        )}
      </form>
    </div>
  );
}

export default Note;
