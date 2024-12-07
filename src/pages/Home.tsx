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
    content: string;
    description: string;
}

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);  // Todos os posts
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);  // Posts filtrados
    const [searchTerm, setSearchTerm] = useState('');  // Valor do termo de pesquisa

    // Simula a busca de posts (pode ser de uma API)
    useEffect(() => {
        const fetchedPosts: Post[] = [
            { id: 1, title: 'Post 1', author: 'Autor 1', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 1' },
            { id: 2, title: 'Post 2', author: 'Autor 2', content: 'TEXTO TESTE TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 2' },
            { id: 3, title: 'Post 3', author: 'Autor 3', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 3' },
            { id: 4, title: 'Post 4', author: 'Autor 4', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 4' },
            { id: 5, title: 'Post 5', author: 'Autor 5', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 5' },
            { id: 6, title: 'Post 6', author: 'Autor 6', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 6' },
            { id: 7, title: 'Post 7', author: 'Autor 7', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 7' },
            { id: 8, title: 'Post 8', author: 'Autor 8', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 8' },
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
                post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
