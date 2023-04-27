import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Component from './components/Component';
import Tema from './plantillas/tema';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './plantillas/quiz';
import Index from './plantillas';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path="/tema" element={<Tema/>} />
        <Route path="/tema/quiz/:id" element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
