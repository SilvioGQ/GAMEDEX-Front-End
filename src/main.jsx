import {
  BrowserRouter,
} from "react-router-dom";
import GlobalStyle from './resource/global-style';

import './fonts/static/EncodeSans/EncodeSans-Regular.ttf'
import { UserProvider } from './context/UserContext';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle/>
        <App/>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);