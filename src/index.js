import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Article } from './components/article';
import { Page404 } from './components/404';
import { Portfolio } from './components/portfolio';
import { NoMobile } from './components/nomobile';

const root = ReactDOM.createRoot(document.getElementById('root'));

setTimeout(() => { console.clear(); console.log('What the freak are you doing here? Go back to Website Now!')}, 10000);

root.render(window.innerWidth>=480?
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='article/:artist' element={<Article />} />
        <Route path='/404' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>:<NoMobile/>
);
