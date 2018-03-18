import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'; 
import 'nprogress/nprogress.css'; 

ReactDOM.render(
            <App />
, document.getElementById('r00t'));

registerServiceWorker();
