import React, { useState } from "react";
import "./createnote.css";
const CreateNote = (props) => {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addItem = (event) => {
    event.preventDefault();
    if (note.title === "" || note.content === "") {
      alert("Insert data");
    } else {
      props.addNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };

  return (
    <div className="createnote" onDoubleClick={handleHide}>
      <form id="formContainer">
        <input
          type="text"
          name="title"
          placeholder="Title"
          autoComplete="off"
          value={note.title}
          onChange={handleChange}
          onClick={handleShow}
        />
        {show ? (
          <>
            <textarea
              value={note.content}
              name="content"
              placeholder="write a note!"
              onChange={handleChange}
            ></textarea>
            <button onClick={addItem}>Add Note</button>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;
