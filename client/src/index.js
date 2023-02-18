import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx'

import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
