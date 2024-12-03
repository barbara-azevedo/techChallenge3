import React from 'react';

interface PostContentProps {
    title: string;
    author: string;
    content: string;
}

const PostContent: React.FC<PostContentProps> = ({ title, author, content }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{content}</p>
        </div>
    );
};

export default PostContent;
