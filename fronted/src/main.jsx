import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import './index.css';
import App from './App.jsx';
import React from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider> {/* ✅ Correctly wrap App with AuthContextProvider */}
      
        <App />
      
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
