import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Assignment6App from './Assignment6App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Assignment6App basePath="" />
    </BrowserRouter>
  </React.StrictMode>
);
