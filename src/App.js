import React from "react";
import './App.css';
import Greeting from "./Components/Greeting";
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<p>Get random greeting message app</p>} />
      </Routes>
      <Routes>
        <Route exact path="/greeting" element={<Greeting />} />
      </Routes>
    </>
  );
};

export default App;
