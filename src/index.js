import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Article } from './components/article';
import { Page404 } from './components/404';
import { Portfolio } from './components/portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='article/:artist' element={<Article />} />
        <Route path='/404' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);