import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PostManagement from '../pages/PostManagement';
import FindOnePost from '../pages/Post';
import SignIn from '../pages/signIn';
import AddPost from '../pages/post-add';
import PostsEdit from '../pages/post-edit';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />  {/* Página inicial */}
        <Route path="/post/:id" element={<FindOnePost />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/post-add" element={<AddPost />} />
        <Route path="/post-edit" element={<PostsEdit />} />
        <Route path="/postmanagement" element={<PostManagement />} />
    </Routes>
  );
};

export default AppRoutes