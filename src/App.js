import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ToDoList from "./components/ToDoList";
import HomePage from "./components/HomePage";
import MyList from "./self-made/MyList";
import Counter from "./self-made/Counter";
import Form from "./self-made/Form";
import Api from "./self-made/Api";
import LogIn from "./self-made/LogIn";
import ThemeToggle from "./self-made/Themes";
import Random from "./self-made/img-title-exercise/Random";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/api" element={<Api />} />
        <Route path="/themes" element={<ThemeToggle />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
