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
  const [newNote, setNewNote] = useState('')

  const addNote = (e) => {
    e.preventDefault()

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
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
            <li key={note.id}>{note.content}</li>
          ))}
        </ul>

        <form onSubmit={addNote}>
          <input
            type='text'
            value={newNote}
            onChange={handleNoteChange}
            placeholder='New note'
          />
          <button type='submit'>Save</button>
        </form>
      </div>
    </>
  )
}

export default Notes
