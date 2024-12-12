import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import postReducer from '../reducer/postReducer';
import { AuthorProps, Post } from '../common/common.entity';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import api from '../api';
import { Avatar, AvatarGroup, Button, TextareaAutosize as BaseTextareaAutosize, Stack } from '@mui/material';

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 500px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 320;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    width: 100%;
    resize: none;
    &:hover {
      border-color: none;
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    /* firefox */
    &:focus-visible {
      outline: 0;
    }
  `,
);

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: (theme).palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
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
                            <TextareaAutosize value={statePost.posts.conteudo} disabled >
                            </TextareaAutosize>
                        </SyledCardContent>
                        <Author authors={statePost.posts.autor} _date={formatDate(statePost.posts.dtCriacao)} />
                    </SyledCard>
                    <Stack spacing={2} direction="row" style={{marginTop: '10px'}}>
                        <Button variant="text" onClick={voltarHome}>Voltar</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FindOnePost;
