import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// TypeScript version: Ensure that the root element exists before rendering
const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
