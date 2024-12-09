import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Post from './pages/Post';
import Login from './pages/login';
import PostManagement from './pages/PostManagement';

import { Container, Typography } from '@mui/material';
import AppAppBar from './components/AppAppBar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppAppBar/>
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/postmanagement" element={<PostManagement />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);
