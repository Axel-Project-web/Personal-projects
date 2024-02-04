//styles
import './Bloc.css';

//react
import { useState, lazy, Suspense, ChangeEvent } from 'react';

//react-router-dom
import { useLoaderData, useNavigate } from 'react-router-dom'

//components
import Sidebar from '../../components/Sidebar/Sidebar';
import Keyboard from '../../components/Keyboard/Keyboard';
import Note from '../../components/Note/Note';
const Message = lazy(() => import('../../components/Message/Message'));

//loader
import { loadDataUser } from '../../loaders/loadDataUser';

//types
import { UserInterface, MessageInterface, NoteType, DisplayerInterface } from '../../types/types';

// plantilla de nota nueva
const InitNote: NoteType = {
  text: '',
  title: '',
  fontSize: 12,
  justify: 'left',
  color: '#494949',
  isSelected: false,
  fontFamily: 'roboto',
};

// estado inicial
const INIT_SESSION: UserInterface = {
  email: '',
  notes: [],
};

const INIT_MESSAGE: MessageInterface = {
  content: '',
  display: false,
};

const INIT_DISPLAYER: DisplayerInterface = {
  keyboard: {
    show: false,
  },
  sideBar: {
    show: false,
  },
};


function Bloc() {
  const [session, setSession]: any = useState(useLoaderData() || INIT_SESSION);
  const [displayer, setDisplayer] = useState(INIT_DISPLAYER);
  const [message, setMessage] = useState(INIT_MESSAGE);
  const navigate = useNavigate();

  // pasada a sidebar
  function chooseNote(indexToSearch: number) {
    const { notes } = session;
    notes.forEach((note: any, index: number) => {
      if (indexToSearch === index) note.isSelected = true;
      else note.isSelected = false;
    });
    setSession({ ...session, notes });
  }

  function handlerKeyboard(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    let noteToUpdated = session.notes.find((note: NoteType) => note.isSelected);
    noteToUpdated = {
      ...noteToUpdated,
      [name]: name === 'fontSize' ? parseInt(value) : value,
    };
    let notesUpdated = session.notes.map((note: NoteType) => {
      if (note.isSelected) {
        return noteToUpdated;
      } else {
        return note;
      }
    });
    setSession({ ...session, notes: notesUpdated });
  }

  function createNote() {
    if (session.notes.length > 0) {
      const noteToAdd = { ...InitNote, isSelected: false };
      const notesUpdated = [noteToAdd, ...session.notes];
      setSession({
        ...session,
        notes: notesUpdated,
      });
    } else {
      const noteToAdd = { ...InitNote, isSelected: true };
      setSession({
        ...session,
        notes: [noteToAdd],
      });
    }
  }

  function save() {
    const token = localStorage.getItem('token');
    const dataToSave = { ...session };
    fetch(`http://127.0.0.1:1234/update/${token}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(dataToSave),
    })
      .then(response =>
        response.ok ? response.json() : Promise.reject(response)
      )
      .then(json => {
        setMessage({
          content: json.status,
          display: true,
        });
        setTimeout(() => setMessage(INIT_MESSAGE), 3000);
      })
      .catch(err => console.log(err.json()));
  }

  function deleteNote() {
    const indexCurrentNote = session.notes.findIndex(
      (note: NoteType) => note.isSelected
    );
    let notesUpdated = [...session.notes];
    notesUpdated.splice(indexCurrentNote, 1);
    notesUpdated = notesUpdated.map((note: NoteType, index: number) => {
      if (index == 0) {
        note.isSelected = true;
        return note;
      } else return note;
    });
    console.log(notesUpdated);
    setSession({
      ...session,
      notes: notesUpdated,
    });
  }

  function logout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  function handleToggle(name: string) {
    setDisplayer((prevState: any) => {
      return {
        ...prevState,
        [name]: {
          show: !prevState[name].show,
        },
      };
    });
  }

  return (
    <main className='bloc-wrapper'>
      <Suspense>
        <Message msg={message.content} display={message.display} />
      </Suspense>
      <Sidebar
        handleClose={handleToggle}
        list={session.notes}
        createNote={createNote}
        chooseNote={chooseNote}
        display={displayer.sideBar.show}
      />
      <div className='wrapper-interface'>
        <Keyboard
          save={save}
          deleteNote={deleteNote}
          handleToggle={handleToggle}
          display={displayer.keyboard.show}
          handlerKeyboard={handlerKeyboard}
          currentNote={{
            note:
              session.notes.find((note: NoteType) => note.isSelected) || InitNote,
          }}
        />
        <Note
          save={save}
          logout={logout}
          deleteNote={deleteNote}
          handlerKeyboard={handlerKeyboard}
          note={session.notes.find((note: NoteType) => note.isSelected)}
          email={session.email}
        />
      </div>
    </main>
  );
}

export { loadDataUser };
export default Bloc;
