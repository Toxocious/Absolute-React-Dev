import React from 'react';
import ReactDOM from 'react-dom/client';

import { Test_Page } from './pages/test';

import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Test_Page />
  </React.StrictMode>
);
