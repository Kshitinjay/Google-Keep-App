import React from "react";
import "./note.css";
const Note = ({ id, data, handleDelete }) => {
  return (
    <div className="note">
      <h1>{data.title}</h1>
      <br />
      <p>{data.content}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Note;
