import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Theme } from './Theme/Theme.js';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <CssBaseline/>
    <SnackbarProvider maxSnack={3} autoHideDuration={2000} >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
