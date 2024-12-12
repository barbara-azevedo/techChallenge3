import React, { useState, useEffect, useReducer, useRef } from 'react';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { InputLabel, MenuItem, Select, SelectChangeEvent, TextareaAutosize as BaseTextareaAutosize, Button, Stack } from '@mui/material';
import { Autor, Post } from '../common/common.entity';
import autorReducer from '../reducer/usuarioReducer';
import api from '../api';
import postReducer from '../reducer/postReducer';

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
    &:hover {
      border-color: ${blue[400]};
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

const initialStateAutor = { autor: [] as Autor[] };
const initialStatePost = { posts: Post };

export default function UpdatePost() {

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [stateAutor, dispatchAutor] = useReducer(autorReducer, initialStateAutor);
    const [statePost, dispatch] = useReducer(postReducer, initialStatePost);

    const [_id, setAutor] = React.useState('');
    const [_titulo, setTitulo] = useState('');
    const [_conteudo, setConteudo] = useState('');

    useEffect(() => {
        api.get('/autor/all')
            .then(response => {
                dispatchAutor({ type: 'SET_AUTORS', payload: response.data });
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    useEffect(() => {
        api.get('/post/findOne/' + id)
            .then(response => {

                const post: Post = response.data;

                setAutor('' + post.autor?.map(p => p._id).toString())
                setTitulo('' + post.titulo)
                setConteudo('' + post.conteudo)

                dispatch({ type: 'SET_SINGLE_POST', payload: response.data });
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const handleChangeAutor = (event: SelectChangeEvent) => {
        setAutor(event.target.value)
    };

    const handlerChangeTitulo = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTitulo(event.target.value);
    };
    const handlerChangeConteudo = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setConteudo(event.target.value);
    };

    const handlerSubmit = () => {
        if (!_id)
            return alert('Autor não selecionado')
        if (!_titulo)
            return alert('Titulo não informado')
        if (!_conteudo)
            return alert('Conteúdo não informado')

        if (sessionStorage.getItem('token')) {
            let jwtStr = sessionStorage.getItem('token')?.toString();

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwtStr
            }

            const body = { titulo: _titulo, conteudo: _conteudo, relationAutorId: _id }
          
            api.put('/post/update/' + id,
                body,
                {
                    headers: headers
                }
            ).then(response => {
                if (200 === response.status) {
                    alert('Salvo com sucesso')
                    setAutor('')
                    setTitulo('')
                    setConteudo('')
                    voltar()
                }
            }).catch(error => {
                if (401 === error.status) {
                    // sessionStorage.removeItem('token')
                    alert('Seu token expirou, efetue novo login')
                } else {
                    alert('Error fetching: ' + error.mensagem)
                    console.error('Error fetching tasks:', error);
                }
            });
            [];
        } else {
            alert('Não autenticado')
        }
    }

    const voltar = () => {
        navigate('/manager')
    }

    return (
        
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="autorId">Author</InputLabel>
                <Select
                    labelId="autorId"
                    id="selectId"
                    value={_id}
                    label="Autor"
                    onChange={handleChangeAutor}
                >
                    {Array.from(Array(stateAutor.autor.length)).map((_, index) => (
                        <MenuItem key={index} value={stateAutor.autor[index]._id}>{stateAutor.autor[index].nome}</MenuItem>
                    ))}
                </Select>
                <Box sx={{ maxWidth: '100%', marginTop: '20px' }}>
                    <TextField value={_titulo} onChange={handlerChangeTitulo} fullWidth label="Titulo" id="titulo" />
                </Box>
                <Box sx={{ maxWidth: '100%', marginTop: '20px' }}>
                    <TextareaAutosize value={_conteudo} onChange={handlerChangeConteudo} maxLength={25000} aria-label="maximum height" minRows={10} placeholder="Digite sua postagem" />
                </Box>
                <Box marginTop={'10px'}>
                    <Stack spacing={2} direction="row">
                        <Button variant="text" onClick={() => {voltar()}}>Voltar</Button>
                        <Button fullWidth
                            size="small"
                            color="success"
                            variant="contained"
                            style={{color: 'white'}}
                            onClick={handlerSubmit}>Salvar</Button>
                    </Stack>

                </Box>
            </FormControl>
        </Box>

    );
}