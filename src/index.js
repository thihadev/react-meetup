import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {  BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context';

createRoot(document.getElementById('root')).render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>
);

