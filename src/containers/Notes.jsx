import React, { useState, useEffect } from 'react'

import axios from 'axios'
import '@styles/containers/Notes.scss'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [showEmpty, setShowEmpty] = useState(false)

  const URL = 'http://localhost:5000/notes'

  useEffect(() => {
    const eventHandler = (response) => {
      setNotes(response.data)
    }

    const promise = axios.get(URL)
    promise
      .then(eventHandler)
      .catch(err => console.error('Error =>', err))
  }, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const addNote = (e) => {
    e.preventDefault()

    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    if (newNote !== '') {
      axios
        .post(URL, noteObject)
        .then(res => setNotes(notes.concat(res.data)))
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
          {notesToShow.map(note => (
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
