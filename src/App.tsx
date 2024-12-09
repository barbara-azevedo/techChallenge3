import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Página Home
import FindOnePost from './pages/Post';
import Login from './pages/login';
import PostManagement from './pages/PostManagement';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página inicial */}
        <Route path="/post/:id" element={<FindOnePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postmanagement" element={<PostManagement />} />
      </Routes>
    </Router>
  );
}

export default App;