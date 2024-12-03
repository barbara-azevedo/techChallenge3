// components/PostCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PostCardProps {
    id: number;
    title: string;
    description: string;
}

const Card = styled.div`
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    padding: 16px;
    margin: 8px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #e0e0e0;
    }
`;

const PostTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 8px;
`;

const PostDescription = styled.p`
    font-size: 14px;
    color: #555;
`;

const PostCard: React.FC<PostCardProps> = ({ id, title, description }) => (
    <Link to={`/post/${id}`}>
        <Card>
            <PostTitle>{title}</PostTitle>
            <PostDescription>{description}</PostDescription>
        </Card>
    </Link>
);

export default PostCard;
