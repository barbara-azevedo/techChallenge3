import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Post from './pages/Post';
import Login from './pages/login';
import PostManagement from './pages/PostManagement';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postmanagement" element={<PostManagement />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
