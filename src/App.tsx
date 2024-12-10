import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  // Página Home
import FindOnePost from './pages/Post';
import PostManagement from './pages/PostManagement';
import SignIn from './pages/signIn';
import AppTheme from './shared/AppTheme';
import { CssBaseline } from '@mui/material';
import AddPost from './pages/post-add';
import PostsEdit from './pages/post-edit';


const App: React.FC = (props: { disableCustomTheme?: boolean }) => {

  return (
    <AppTheme {...props}>
     <CssBaseline enableColorScheme />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Página inicial */}
          <Route path="/post/:id" element={<FindOnePost />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/post-add" element={<AddPost />} />
          <Route path="/post-edit" element={<PostsEdit />} />
          <Route path="/postmanagement" element={<PostManagement />} />
        </Routes>
      </Router>
    </AppTheme>
  );
}

export default App;