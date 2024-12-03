import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';  // Para redirecionamento
import BackButton from '../components/BackButton';

// Estilos para a página de login
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
`;

const LoginBox = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
`;

const Title = styled.h2`
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // Hook para navegação

    const handleLogin = () => {
        // Lógica simples para validação de login (deve ser substituída por validação real)
        if (username === 'admin' && password === 'admin') {
            alert('Login bem-sucedido!');
            navigate('/postmanagement');  // Redireciona para a página principal após login bem-sucedido
        } else {
            alert('Usuário ou senha incorretos!');
        }
    };

    return (
        <Container>
            <LoginBox>
                <Title>Login</Title>
                <Input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Atualiza o estado com o valor do campo
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Atualiza o estado com o valor do campo
                />
                <Button onClick={handleLogin}>Entrar</Button>
                <BackButton />
            </LoginBox>
        </Container>
    );
};

export default Login;
