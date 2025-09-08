import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'flowbite';
import 'flowbite-react';
import 'preline';
import 'preline';

import { BrowserRouter } from 'react-router-dom'
import './index.css'
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)




