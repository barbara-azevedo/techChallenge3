import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import FindOnePost from '../pages/Post';
import SignIn from '../pages/signIn';
import AddPost from '../pages/post-add';
import UpdatePost from '../pages/UpdatePost';
import ManagerPost from '../pages/PostListEdit';


const AppRoutes = () => {

  const isAuthenticated = () => {
    return Boolean(sessionStorage.getItem('token'));
  }

  const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
  };

  return (
    <Routes>
        <Route path="/" element={<Home />} />  {/* Página inicial */}
        <Route path="/post/:id" element={<FindOnePost />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/post-add"
          element={
            <RequireAuth>
              <AddPost />
            </RequireAuth>
          }
        />
        <Route
          path="/manager"
          element={
            <RequireAuth>
              <ManagerPost />
            </RequireAuth>
          }
        />
        <Route
          path="/update-post/:id"
          element={
            <RequireAuth>
              <UpdatePost />
            </RequireAuth>
          }
        />                  
    </Routes>
  );
};

export default AppRoutes