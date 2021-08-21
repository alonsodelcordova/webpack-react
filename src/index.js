import React from 'react';
import 'bootstrap';
import {render} from 'react-dom';
import App from './app/App';
import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.min.css';

render(
   <App />,
   document.getElementById('app')
);