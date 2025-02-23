import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './Shop';

import './index.css';
import Shop from './Shop';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>  {/* Wrap App with BrowserRouter */}
    <App />
  </BrowserRouter>
);
