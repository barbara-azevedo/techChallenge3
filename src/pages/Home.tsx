// pages/Home.tsx
import React, { useState, useEffect, useReducer } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PostList from '../components/PostList';
import styled from 'styled-components';
import api from '../api';
import postReducer from '../reducer/postReducer';
import { Post } from '../common/common.entity';
//import posts from '../components/ListaPostsExemplo';

const HomeContainer = styled.div`
    padding: 16px;
`;

const initialStatePost = { posts: [] as Post[] };

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statePost, dispatchPost] = useReducer(postReducer, initialStatePost);

    useEffect(() => {
        api.get('/post/all')
            .then(response => {
                setPosts(response.data);  // Define todos os posts
                setFilteredPosts(response.data);
                dispatchPost({ type: 'SET_POSTS', payload: response.data });
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const handleSearchChange = (searchTerm: string) => {
        setSearchTerm(searchTerm);
        const filtered = posts.filter(
            (post) =>
                post.conteudo?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
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
