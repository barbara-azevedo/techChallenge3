// components/PostList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Post {
    id: number;
    author: string;
    title: string;
    description: string;
}

interface PostListProps {
    posts: Post[];  // Recebe os posts filtrados como prop
}

const PostCard = styled.div`
    background-color: #f4f4f4;
    padding: 16px;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 8px;
`;

const PostDescription = styled.p`
    font-size: 14px;
    color: #555;
`;

const PostAuthor = styled.p`
    font-size: 12px;
    color: #555;
`;

const PostLink = styled(Link)`
    text-decoration: none;
    color: #007bff;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <PostCard key={post.id}>
                        <PostTitle>{post.title}</PostTitle>
                        <PostAuthor>{post.author}</PostAuthor>
                        <PostDescription>{post.description}</PostDescription>
                        <PostLink to={`/post/${post.id}`}>Leia mais...</PostLink>
                    </PostCard>
                ))
            ) : (
                <p>Nenhum post encontrado.</p>
            )}
        </div>
    );
};

export default PostList;
