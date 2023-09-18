import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ToDoList from "./components/ToDoList";
import HomePage from "./components/HomePage";
import MyList from "./self-made/MyList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
