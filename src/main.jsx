import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
} from "react-router-dom";
import GlobalStyle from './resource/global-style';

import './fonts/static/EncodeSans/EncodeSans-Regular.ttf'
import { UserProvider } from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle/>
        <App/>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);