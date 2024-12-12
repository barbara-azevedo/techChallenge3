import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import FindOnePost from '../pages/Post';
import SignIn from '../pages/signIn';
import AddPost from '../pages/post-add';
import UpdatePost from '../pages/UpdatePost';
import ManagerPost from '../pages/PostListEdit';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />  {/* Página inicial */}
        <Route path="/post/:id" element={<FindOnePost />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/post-add" element={<AddPost />} />
        <Route path="/manager" element={<ManagerPost />} />
        <Route path="/update-post/:id" element={<UpdatePost />} />
    </Routes>
  );
};

export default AppRoutes