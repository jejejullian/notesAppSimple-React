import React from "react";
import NoteItem from "./NoteItem";

const SectionNotes = ({ label, notes, setNotes }) => {
  return (
    <section className="notes-items">
      <h2>{label}</h2>
      {notes.length === 0 ? (
        <p>No notes available</p>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} setNotes={setNotes} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionNotes;
