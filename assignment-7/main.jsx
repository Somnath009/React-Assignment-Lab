import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Assignment7App from './Assignment7App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Assignment7App basePath="" />
    </BrowserRouter>
  </React.StrictMode>
);
