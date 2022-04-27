import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './components/landings/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
