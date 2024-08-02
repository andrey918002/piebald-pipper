import './bootstrap';

import.meta.glob(['../assets/img**'])

import React from "react";
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx'
import './normalize.css'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
