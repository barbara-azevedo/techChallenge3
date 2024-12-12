import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import AppAppBar from './components/AppAppBar';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <div className="app-container">
          <Typography variant="h1" gutterBottom>
            EducaOnline
          </Typography>
          <Typography>Informações para seus estudos</Typography>
        </div>
        <App />
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);