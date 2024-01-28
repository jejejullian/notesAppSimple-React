import React, { useState } from "react";

const FormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddNote = () => {
    const newNote = {
      id: Math.random(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    updateNotes((prevNotes) => [...prevNotes, newNote]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="note-input">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="note-input__title" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Note" className="note-input__body" />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default FormInput;
