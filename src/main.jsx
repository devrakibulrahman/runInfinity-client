import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './layouts/app';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);