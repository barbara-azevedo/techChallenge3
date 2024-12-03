import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../components/PostContent';  // Componente para exibir o conteúdo do post
import BackButton from '../components/BackButton';   // Botão para voltar à home

// Simulando os dados dos posts
const posts = [
    { id: 1, title: 'Post 1', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO' },
    { id: 2, title: 'Post 2', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO' },
    { id: 3, title: 'Post 3', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO' },
    { id: 4, title: 'Post 1', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO' },
    { id: 5, title: 'Post 2', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO' },
    { id: 6, title: 'Post 1', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO' },
    { id: 7, title: 'Post 2', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO' },
    { id: 8, title: 'Post 1', content: 'TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO' },
];

const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>();  // Captura o parâmetro 'id' da URL
    const [post, setPost] = useState<{ title: string; content: string } | null>(null);

    useEffect(() => {
        const postId = id ? parseInt(id, 10) : null;  // Converte o 'id' da URL para número
        if (postId) {
            const foundPost = posts.find(post => post.id === postId);  // Busca o post pelo 'id'
            setPost(foundPost || null);  // Atualiza o estado com o post encontrado
        }
    }, [id]);  // Reexecuta sempre que o 'id' mudar

    if (!post) {
        return <div>Post não encontrado!</div>;  // Exibe mensagem caso o post não seja encontrado
    }

    return (
        <div>
            <PostContent title={post.title} content={post.content} />  {/* Exibe o título e conteúdo */}
            <BackButton />  {/* Botão para voltar à página inicial */}
        </div>
    );
};

export default Post;
