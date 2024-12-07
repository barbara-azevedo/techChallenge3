import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogoff from '../components/HeaderLogoff';

// Simulação de dados
const posts = [
    { id: 1, title: 'Post 1', author: 'Autor 1', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 1' },
    { id: 2, title: 'Post 2', author: 'Autor 2', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 2' },
    { id: 3, title: 'Post 3', author: 'Autor 3', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 3' },
    { id: 4, title: 'Post 4', author: 'Autor 4', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 4' },
    { id: 5, title: 'Post 5', author: 'Autor 5', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 5' },
    { id: 6, title: 'Post 6', author: 'Autor 6', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 6' },
    { id: 7, title: 'Post 7', author: 'Autor 7', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 7' },
    { id: 8, title: 'Post 8', author: 'Autor 8', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO', description: 'Resumo do post 8' },
];

// Estilos
const FormContainer = styled.div`
    padding: 16px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    margin-bottom: 12px;
    padding: 8px;
    font-size: 16px;
`;

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 150px;
    margin-bottom: 12px;
    padding: 8px;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 10px 16px;
    font-size: 16px;
    margin-right: 8px;
`;

const EditPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Estado para armazenar os dados do post
    const [post, setPost] = useState({
        title: '',
        author: '',
        summary: '',
        content: '',
    });

    // Busca os dados do post pelo ID
    useEffect(() => {
        const postData = posts.find((p) => p.id === Number(id));
        if (postData) {
            setPost(postData);
        } else {
            alert('Post não encontrado');
            navigate('/');
        }
    }, [id, navigate]);

    // Atualiza os dados conforme o usuário digita
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPost((prev) => ({ ...prev, [name]: value }));
    };

    // Função para salvar as alterações
    const handleSave = () => {
        console.log('Dados atualizados:', post);
        navigate(-1);
    };

    // Função para cancelar a edição
    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <FormContainer>
            <HeaderLogoff/>
            <h2>Editar Post</h2>
            <Input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
                placeholder="Título"
            />
            <Input
                type="text"
                name="author"
                value={post.author}
                onChange={handleChange}
                placeholder="Autor"
            />
            <Input
                type="text"
                name="summary"
                value={post.summary}
                onChange={handleChange}
                placeholder="Resumo"
            />
            <TextArea
                name="content"
                value={post.content}
                onChange={handleChange}
                placeholder="Conteúdo"
            />
            <Button onClick={handleSave}>Salvar</Button>
            <Button onClick={handleCancel}>Cancelar</Button>
        </FormContainer>
    );
};

export default EditPost;
