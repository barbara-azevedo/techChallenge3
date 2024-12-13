import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import AppAppBar from './components/AppAppBar';
import { StyledEngineProvider } from '@mui/material/styles';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <AppAppBar />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
        >

          <Typography variant="h3" gutterBottom>
            EducaOnline
          </Typography>
          <Typography>Informações para seus estudos</Typography>
          <App />
        </Container>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);