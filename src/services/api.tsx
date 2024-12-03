// App.tsx ou no arquivo de configuração de rotas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/login';
import Post from '../pages/Post';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post/:id" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;
