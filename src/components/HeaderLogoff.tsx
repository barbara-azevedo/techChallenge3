import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #7092BE;
    color: white;
`;

const Title = styled.h1`
    font-size: 32px;
`;

const LogoffButton = styled.button`
    background-color: white;
    color: black;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-color: #0056b3;
    }
`;

const HeaderLogoff: React.FC = () => {

    const navigate = useNavigate();
    
    const handleLogout = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <HeaderContainer>
            <Title>EDUCA ONLINE</Title>
            <LogoffButton onClick={handleLogout}>Logout</LogoffButton>
        </HeaderContainer>
    );
};

export default HeaderLogoff;


