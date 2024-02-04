import { MouseEventHandler } from 'react';
import './Sidebar.css';

interface PropsInterface {
  display: boolean;
  list: Array<Object>;
  chooseNote: Function;
  handleClose: Function;
  createNote: MouseEventHandler;
}

function Sidebar({
  list,
  display,
  chooseNote,
  createNote,
  handleClose,
}: PropsInterface) {
  return (
    <div className={`menu ${display ? 'show-sidebar' : 'hidden-sidebar'}`}>
      <button
        onClick={() => handleClose('sideBar')}
        className='btn-close-sidebar'
      ></button>
      <h2 className='menu-title'>Your notes</h2>
      <ul className='list'>
        {list.length === 0 && <h2 className='msg-empty-list'>Create a note</h2>}
        {list.map((note: any, index: number) => {
          return (
            <li key={index}>
              <button
                onClick={() => chooseNote(index)}
                className={
                  note.isSelected ? 'note-selected' : 'note-unselected'
                }
              >
                {note.title.length ? note.title : 'Title here'}
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={createNote} className='btn-create-note'>
        create note
      </button>
    </div>
  );
}

export default Sidebar;
