import React from 'react';

interface Post {
    id: number;
    title: string;
    author: string;
    content: string;
    description: string;
}

const posts: Post[] = [
    { id: 1, title: 'Post 1', author: 'Autor 1', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 1' },
    { id: 2, title: 'Post 2', author: 'Autor 2', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 2' },
    { id: 3, title: 'Post 3', author: 'Autor 3', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 3' },
    { id: 4, title: 'Post 4', author: 'Autor 4', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 4' },
    { id: 5, title: 'Post 5', author: 'Autor 5', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 5' },
    { id: 6, title: 'Post 6', author: 'Autor 6', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 6' },
    { id: 7, title: 'Post 7', author: 'Autor 7', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 7' },
    { id: 8, title: 'Post 8', author: 'Autor 8', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 8' },
];

const ListaPostsExemplo: React.FC = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                        <td>{post.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListaPostsExemplo;
