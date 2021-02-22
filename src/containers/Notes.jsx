import React, { useState, useEffect } from 'react'

import noteService from '@services/notes'

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
      important: Math.random() < 0.5,
      deleted: false
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

  const handleImportance = (id) => {
    const urlId = `${URL}/${id}`
    const note = notes.find(n => n.id === id)

    const changedNote = { ...note, important: !note.important }

    axios
      .put(urlId, changedNote)
      .then((res) => {
        setNotes(notes.map(note => (note.id !== id ? note : res.data)))
      })
      .catch(err => console.error(`error while updating importance of id ${id} => ${err}`))
  }

  const handleDelete = (id) => {
    const urlId = `${URL}/${id}`
    const note = notes.find(n => n.id === id)

    const deletedNote = { ...note, deleted: true }

    axios
      .put(urlId, deletedNote)
      .then((res) => {
        setNotes(notes.map(note => (note.id !== id ? note : res.data)))
      })
      .catch(err => console.error(`error deleting note with id ${id} => ${err}`))
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
            note.deleted === false
            && (
              <li key={note.id}>
                {note.important ? <span className='note-important' /> : null}

                <p>{note.content}</p>

                <button type='button' onClick={() => handleImportance(note.id)}>
                  {note.important ? 'Not important' : 'Make important'}
                </button>

                <button type='button' className='note-delete' onClick={() => handleDelete(note.id)}>X</button>
              </li>
            )
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
