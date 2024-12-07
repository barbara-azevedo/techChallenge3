import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from '../pages/CreatePost';
import Home from '../pages/Home';
import Login from '../pages/login';
import Post from '../pages/Post';
import PostManagement from '../pages/PostManagement';
import EditPost from '../pages/EditPost';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página inicial */}
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postmanagement" element={<PostManagement />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes