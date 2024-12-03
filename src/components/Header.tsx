// components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const LoginButton = styled.button`
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

const Header: React.FC = () => (
    <HeaderContainer>
        <Title>EDUCA ONLINE</Title>
        <Link to="/login">
            <LoginButton>Login</LoginButton>
        </Link>
    </HeaderContainer>
);

export default Header;
