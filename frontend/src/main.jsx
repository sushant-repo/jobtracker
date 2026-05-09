import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Header from './components/header/Header.jsx';
import router from './routes.js';
import { RouterProvider } from 'react-router-dom';

// Import our custom CSS
import '@/scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
