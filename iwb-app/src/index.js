import React from 'react';
import ReactDOM from 'react-dom'; // Change to react-dom
import App from './App'; // Ensure App is imported correctly
import './index.css';

const root = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);