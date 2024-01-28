import React from 'react';

const NoteItem = ({ note, setNotes }) => {
  const { id, title, body, createdAt, archived } = note;

  const handleDelete = () => {
    setNotes(prevNotes => prevNotes.filter(prevNote => prevNote.id !== id));
  };

  const handleArchive = () => {
    setNotes(prevNotes =>
      prevNotes.map(prevNote =>
        prevNote.id === id ? { ...prevNote, archived: true } : prevNote
      )
    );
  };

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={handleDelete}>
          Delete
        </button>
        {!archived && (
          <button className="note-item__archive-button" onClick={handleArchive}>
            Archive
          </button>
        )}
      </div>
    </div>
  );
};

export default NoteItem;
