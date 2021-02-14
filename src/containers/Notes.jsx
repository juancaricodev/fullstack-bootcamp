import React, { useState } from 'react'

import '@styles/containers/Notes.scss'

const noteList = [
  {
    content: 'First note',
    date: 'date',
    important: 1,
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
    important: 1,
    id: 3
  }
]

const Notes = () => {
  const [notes, setNotes] = useState(noteList)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [showEmpty, setShowEmpty] = useState(false)

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === 1)

  const addNote = (e) => {
    e.preventDefault()

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    if (newNote !== '') {
      setNotes(notes.concat(noteObject))
      // setNotes([...notes, noteObject])
      setShowEmpty(false)
    } else {
      setShowEmpty(true)
    }

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

        <button type='button' onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>

        <ul>
          {notesToShow.map((note) => (
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

        {
          showEmpty === true
            ? <div className='notes-empty danger'>The input field is empty</div>
            : ''
        }
      </div>
    </>
  )
}

export default Notes
