import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import postReducer from '../reducer/postReducer';
import { AuthorProps, Post, PostSingle } from '../common/common.entity';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import api from '../api';
import { Avatar, AvatarGroup, Button } from '@mui/material';



const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: (theme).palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

const initialStatePost = { posts: Post };

function Author({ _date, authors }: { _date: any, authors: AuthorProps[] | undefined }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >
                <AvatarGroup max={3}>
                    {authors?.map((author, index) => (
                        <Avatar
                            key={index}
                            alt={author.nome}
                            sx={{ width: 24, height: 24 }}
                        />
                    ))}
                </AvatarGroup>
                <Typography variant="caption">
                    {authors?.map(a => a.nome)}
                </Typography>
            </Box>
            <Typography variant="caption">{_date}</Typography>
        </Box>
    );
}

export function formatDate(date: any) {
    return new Date(date).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
}

const FindOnePost: React.FC = () => {
    const navigate = useNavigate();

    const voltarHome = () => {
        navigate('/')
    }

    const { id } = useParams<{ id: string }>();  // Captura o parâmetro 'id' da URL
    const [statePost, dispatch] = useReducer(postReducer, initialStatePost);

    useEffect(() => {
        api.get('/post/findOne/' + id)
            .then(response => {
                dispatch({ type: 'SET_SINGLE_POST', payload: response.data });
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    if (!statePost.posts) {
        return <div>Post não encontrado!</div>;  // Exibe mensagem caso o post não seja encontrado
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

            <Grid container spacing={2} columns={1}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <SyledCard
                        variant="outlined"
                        tabIndex={0}
                    >
                        <SyledCardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {statePost.posts.titulo}
                            </Typography>
                            <StyledTypography sx={{ width: '100%', height: '100%' }} variant="body1" color="text.secondary">
                                {statePost.posts.conteudo}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={statePost.posts.autor} _date={formatDate(statePost.posts.dtCriacao)} />
                    </SyledCard>
                    <Button color="primary" variant="outlined" fullWidth onClick={voltarHome}>Voltar</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FindOnePost;
