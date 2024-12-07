import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilo para o botão
const Button = styled.button`
    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);  // Efeito de levantar o botão ao passar o mouse
    }

    &:active {
        background-color: #004085;
        transform: translateY(0);  // Efeito de pressionar o botão
    }
`;

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');  // Redireciona para a Home
    };

    return <Button onClick={handleBackClick}>Voltar para Home</Button>;
};

export default BackButton;
