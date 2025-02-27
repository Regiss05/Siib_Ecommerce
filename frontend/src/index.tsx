import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './Shop';

import './index.css';
// import Shop from './Shop';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>  {/* Wrap App with BrowserRouter */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
