import React, { useState } from "react";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Note from "./components/Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem([...addItem, note]);
  };

  const handleDelete = (id) => {
    console.log(id);
    setAddItem((allItems) => {
      return allItems.filter((item, index) => {
        return index != id;
      });
    });
  };

  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      <Header />
      <CreateNote addNote={addNote} />
      <div className="allNotesContainer">
        {addItem.length >= 1
          ? addItem.map((item, id) => {
              return (
                <Note
                  key={id}
                  id={id}
                  data={item}
                  handleDelete={handleDelete}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default App;
