import React, { useState } from 'react'

const noteList = [
  {
    content: 'First note',
    date: 'date',
    important: 0,
    id: 1
  },
  {
    content: 'Second note',
    date: 'date',
    important: 0,
    id: 2
  },
  {
    content: 'Third note',
    date: 'date',
    important: 0,
    id: 3
  }
]

const Notes = () => {
  const [notes, setNotes] = useState(noteList)
  const [newNote, setNewNote] = useState('a new note...')

  const addNote = (e) => {
    e.preventDefault()
    console.log('notes', e.target)
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <>
      <div className='part-tag'>
        <h2>Notes</h2>
        <h3>Example section 2.b</h3>
      </div>

      <div className='notes'>
        <h2>Notes</h2>

        <ul>
          {notes.map((note) => (
            <li key={note.id}>{note.text}</li>
          ))}
        </ul>

        <form onSubmit={addNote}>
          <input
            type='text'
            value={newNote}
            onChange={handleNoteChange}
          />
          <button type='submit'>Save</button>
        </form>
      </div>
    </>
  )
}

export default Notes
