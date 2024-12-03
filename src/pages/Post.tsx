import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../components/PostContent';  // Componente para exibir o conteúdo do post
import BackButton from '../components/BackButton';   // Botão para voltar à home
import posts from '../components/ListaPostsExemplo';
import Header from '../components/Header';


const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>();  // Captura o parâmetro 'id' da URL
    const [post, setPost] = useState<{ title: string; author:string; content: string } | null>(null);

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
            <Header />
            <PostContent title={post.title} author={post.author} content={post.content} />  {/* Exibe o título e conteúdo */}
            <BackButton />  {/* Botão para voltar à página inicial */}
        </div>
    );
};

export default Post;
