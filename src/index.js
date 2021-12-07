import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Procedures from "./components/Procedures";
import Home from './components/Home';


import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="procedures" element={<Procedures />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement);
