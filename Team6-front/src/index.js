import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import Doar from '../src/views/Doar';
import Blog from '../src/views/Blog';
import Inicio from '../src/views/Inicio';
import Calculadora from '../src/views/Calculadora';
import App from './App';
import ResponsiveAppBar from './components/Navbar';
import Acao from '../src/views/Acao';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <ResponsiveAppBar />
    <Routes>

      <Route path="/" element={<Inicio/>} />
      <Route path="/inicio" element={<Inicio/>} />
      <Route path="/calculadora" element={<Calculadora/>} />
      <Route path="/doar" element={<Doar/>} />
      <Route path="/acao" element={<Acao/>} />
      <Route path="/blog" element={<Blog/>} />


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


