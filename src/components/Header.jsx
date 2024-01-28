import React from 'react';

const Header = ({ search, updateQuery, updateNotes }) => {
  const handleSearch = (e) => {
    updateQuery(e.target.value);
  };


  return (
    <header className="note-app__header">
      <h1>Note App</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search notes"
      />
    </header>
  );
};

export default Header;
