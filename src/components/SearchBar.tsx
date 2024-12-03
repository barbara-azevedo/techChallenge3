// components/SearchBar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    margin: 16px 0;
    display: flex;
    justify-content: center;
`;

const SearchInput = styled.input`
    width: 80%;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;

interface SearchBarProps {
    onSearchChange: (searchTerm: string) => void;  // Função recebida do pai
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onSearchChange(newSearchTerm);  // Passa o termo de pesquisa para o componente pai
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Pesquisar posts..."
            />
        </SearchContainer>
    );
};

export default SearchBar;
