import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HeaderLogoff from '../components/HeaderLogoff';

interface Post {
    id: number;
    author: string;
    title: string;
    description: string;
}

const Container = styled.div`
    padding: 16px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const Title = styled.h1`
    font-size: 24px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    margin-top: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
`;

const TableHeader = styled.th`
    background-color: #f4f4f4;
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
`;

const TableCell = styled.td`
    padding: 8px;
    border: 1px solid #ddd;
`;

const ActionButton = styled.button`
    margin: 0 4px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const PostManagement: React.FC = () => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState<Post[]>([
          { id: 1, title: 'Primeiro Post', author: 'Autor 1', description: 'Descrição do post.' },
          { id: 2, title: 'Segundo Post', author: 'Autor 2', description: 'Descrição do post.' },
          { id: 3, title: 'Terceiro Post', author: 'Autor 3', description: 'Descrição do post.' },
          { id: 4, title: 'Quarto Post', author: 'Autor 4', description: 'Descrição do post.' },
          { id: 5, title: 'Quinto Post', author: 'Autor 5', description: 'Descrição do post.' },
          { id: 6, title: 'Sexto Post', author: 'Autor 6', description: 'Descrição do post.' },
          { id: 7, title: 'Setimo Post', author: 'Autor 7', description: 'Descrição do post.' },
          { id: 8, title: 'Oitavo Post', author: 'Autor 8', description: 'Descrição do post.' }, 
    ]);

    const handleAddPost = () => {
        navigate('/createpost')
    };

    const handleEditPost = (id: number) => {
        navigate(`/edit/${id}`)
    };

    const handleDeletePost = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este post?')) {
            setPosts(posts.filter((post) => post.id !== id));
        }
    };

    return (
        <Container>
            <HeaderLogoff/>
            <Button onClick={handleAddPost}>Adicionar Novo Post</Button>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Título</TableHeader>
                        <TableHeader>Descrição</TableHeader>
                        <TableHeader>Ações</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <TableCell>{post.id}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.description}</TableCell>
                            <TableCell>
                                <ActionButton onClick={() => handleEditPost(post.id)}>
                                    Editar
                                </ActionButton>
                                <ActionButton onClick={() => handleDeletePost(post.id)}>
                                    Excluir
                                </ActionButton>
                            </TableCell>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default PostManagement;

