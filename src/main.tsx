import React from 'react';
import ReactDOM from 'react-dom/client';

import { Container_Component as Container } from './components/container';

import { Test_Page } from './pages/test';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container>
      <Test_Page />
    </Container>
  </React.StrictMode>
);
