import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot từ react-dom/client
import App from './App';

const root = createRoot(document.getElementById('root')); // Sử dụng createRoot mà không cần prefix là ReactDOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);