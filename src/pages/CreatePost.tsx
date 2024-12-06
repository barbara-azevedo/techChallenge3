import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin: 8px 0 4px;
    font-size: 14px;
    font-weight: bold;
`;

const Input = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-height: 100px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &.cancel {
        background-color: #ccc;
        color: black;
    }

    &.save {
        background-color: #007bff;
        color: white;
    }

    &:hover {
        opacity: 0.8;
    }
`;

const CreatePost: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        summary: '',
        content: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCancel = () => {
        navigate(-1); // Retorna para a página anterior
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Post criado:', formData);
        // Aqui, você pode adicionar a lógica para salvar o post na API ou no estado global
        navigate('/posts'); // Redireciona para a lista de posts (ou outra página)
    };

    return (
        <Container>
            <Header>
                <Title>Criar Novo Post</Title>
                <Button className="cancel" onClick={handleCancel}>
                    Cancelar
                </Button>
            </Header>
            <Form onSubmit={handleSave}>
                <Label htmlFor="title">Título</Label>
                <Input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Digite o título do post"
                />

                <Label htmlFor="author">Autor</Label>
                <Input
                    id="author"
                    name="author"
                    type="text"
                    value={formData.author}
                    onChange={handleInputChange}
                    placeholder="Digite o nome do autor"
                />

                <Label htmlFor="summary">Resumo</Label>
                <Input
                    id="summary"
                    name="summary"
                    type="text"
                    value={formData.summary}
                    onChange={handleInputChange}
                    placeholder="Digite um resumo curto do post"
                />

                <Label htmlFor="content">Conteúdo</Label>
                <TextArea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Digite o conteúdo completo do post"
                />

                <ButtonGroup>
                    <Button type="button" className="cancel" onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button type="submit" className="save">
                        Salvar
                    </Button>
                </ButtonGroup>
            </Form>
        </Container>
    );
};

export default CreatePost;
