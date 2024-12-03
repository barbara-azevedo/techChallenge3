import React from 'react';

interface PostContentProps {
    title: string;
    content: string;
}

const PostContent: React.FC<PostContentProps> = ({ title, content }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default PostContent;
