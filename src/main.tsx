import React from 'react';
import ReactDOM from 'react-dom/client';

import { Container_Component as Container } from './components/container';
import { Banner_Component as Banner } from './components/banner';

import { Test_Page } from './pages/test';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container>
      <Banner />
      <Test_Page />
    </Container>
  </React.StrictMode>
);
