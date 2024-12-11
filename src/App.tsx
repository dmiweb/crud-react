import { useState, useEffect } from 'react';
import createRequest from './Api/createRequest';
import Header from './components/Header/Header';
import NotesBoard from './components/NotesBoard/NotesBoard';
import Note from './components/NotesBoard/Note';
import FormAddNotes from './components/FormAddNotes/FormAddNotes';
import Button from './components/Button/Button';
import './App.css';

type Note = {
  id: string,
  content: string
}

function App() {
  const url = 'https://crud-backend-smoky-ten.vercel.app/notes';
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    createRequest(url)
      .then(notes => setNotes(notes));
  }, []);

  const handleUpdate = (): void => {
    createRequest(url)
      .then(notes => setNotes(notes))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const { currentTarget } = event;

    if (!currentTarget.note.value) return;

    const newNote = {
      id: Date.now(),
      content: currentTarget.note.value
    };

    const response = await createRequest(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    });

    if (response.status === 'OK') {
      createRequest(url).then(notes => setNotes(notes))
    }

    currentTarget.note.value = '';
  }

  const handleRemove = async (id: string): Promise<void> => {
    const response = await createRequest(`${url}/${id}`, {
      method: 'DELETE'
    })

    if (response.status === 'OK') {
      createRequest(url).then(notes => setNotes(notes))
    }
  }

  return (
    <div className='notes'>
      <Header>
        <Button type="button" className="notes__update-btn" handler={handleUpdate} />
      </Header>

      <NotesBoard>
      {notes.map(note => {
          return (
            <Note key={note.id} id={note.id} content={note.content} handler={handleRemove} />
          );
        })}
      </ NotesBoard>

      <FormAddNotes handler={handleSubmit}>
        <Button type="submit" className="form-add-note__submit-btn" />
      </FormAddNotes>
    </div>
  )
}

export default App;
