// pages/Home.tsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PostList from '../components/PostList';
import styled from 'styled-components';

const HomeContainer = styled.div`
    padding: 16px;
`;

interface Post {
    id: number;
    title: string;
    author: string;
    description: string;
}

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);  // Todos os posts
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);  // Posts filtrados
    const [searchTerm, setSearchTerm] = useState('');  // Valor do termo de pesquisa

    // Simula a busca de posts (pode ser de uma API)
    useEffect(() => {
        const fetchedPosts: Post[] = [
          { id: 1, title: 'Primeiro Post', author: 'Autor 1', description: 'Descrição do post.' },
          { id: 2, title: 'Segundo Post', author: 'Autor 2', description: 'Descrição do post.' },
          { id: 3, title: 'Terceiro Post', author: 'Autor 3', description: 'Descrição do post.' },
          { id: 4, title: 'Quarto Post', author: 'Autor 4', description: 'Descrição do post.' },
          { id: 5, title: 'Quinto Post', author: 'Autor 5', description: 'Descrição do post.' },
          { id: 6, title: 'Sexto Post', author: 'Autor 6', description: 'Descrição do post.' },
          { id: 7, title: 'Setimo Post', author: 'Autor 7', description: 'Descrição do post.' },
          { id: 8, title: 'Oitavo Post', author: 'Autor 8', description: 'Descrição do post.' },      
        ];

        setPosts(fetchedPosts);  // Define todos os posts
        setFilteredPosts(fetchedPosts);  // Inicialmente, mostra todos os posts
    }, []);

    // Função de pesquisa que filtra os posts
    const handleSearchChange = (searchTerm: string) => {
        setSearchTerm(searchTerm);  // Atualiza o valor do termo de pesquisa
        const filtered = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);  // Atualiza os posts filtrados
    };

    return (
        <HomeContainer>
            <Header />
            <h1>Lista de posts</h1>
            <SearchBar onSearchChange={handleSearchChange} />
            <PostList posts={filteredPosts} />  {/* Passa os posts filtrados para o PostList */}
        </HomeContainer>
    );
};

export default Home;
