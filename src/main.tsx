import './index.css';
import '@/theme/fonts';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<p>Loading...</p>}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
