import React, { useState, useEffect, useReducer, useRef } from 'react';
import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { InputLabel, MenuItem, Select, SelectChangeEvent, TextareaAutosize as BaseTextareaAutosize, Button, Stack, FormControlLabel, Checkbox, Paper, InputBase, Divider, IconButton } from '@mui/material';
import { Autor } from '../common/common.entity';
import autorReducer from '../reducer/usuarioReducer';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


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

export default function AddPost() {

    const navigate = useNavigate();

    const [stateAutor, dispatchAutor] = useReducer(autorReducer, initialStateAutor);

    const [checked, setChecked] = React.useState(false);

    const [_nome, setNewAutor] = React.useState('');

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

    const handleChangeAutor = (event: SelectChangeEvent) => {
        setAutor(event.target.value)
    };

    const handlerChangeTitulo = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTitulo(event.target.value);
    };
    const handlerChangeNewAutor = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setNewAutor(event.target.value);
    };
    const handlerChangeConteudo = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setConteudo(event.target.value);
    };

    const handlerSubmitAutor = () => {

        if (checked) {
            if (!_nome)
                return alert('Nome do Autor não informado')

            if (sessionStorage.getItem('token')) {
                let jwtStr = sessionStorage.getItem('token')?.toString();

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwtStr
                }

                const body = { nome: _nome }

                api.post('/autor/create',
                    body,
                    {
                        headers: headers
                    }
                ).then(response => {
                    if (201 === response.status) {
                        alert('Salvo com sucesso')
                        setChecked(false)
                        setNewAutor('')
                        api.get('/autor/all')
                            .then(response => {
                                dispatchAutor({ type: 'SET_AUTORS', payload: response.data });
                            })
                            .catch(error => {
                                console.error('Error fetching tasks:', error);
                            });
                        [];
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

    }

    const handlerSubmit = () => {

        if (checked) {
            if (!_nome)
                return alert('Nome do Autor não informado')

            if (sessionStorage.getItem('token')) {
                let jwtStr = sessionStorage.getItem('token')?.toString();

                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwtStr
                }

                const body = { nome: _nome }

                api.post('/autor/create',
                    body,
                    {
                        headers: headers
                    }
                ).then(response => {
                    if (201 === response.status) {
                        alert('Salvo com sucesso')
                        api.get('/autor/findSearch/' + _nome)
                            .then(response => {
                                const autor: Autor = response.data;
                                setAutor('' + autor._id)
                                console.log('novo autor ' + autor._id)
                                dispatchAutor({ type: 'SET_AUTORS', payload: response.data });
                            })
                            .catch(error => {
                                console.error('Error fetching tasks:', error);
                            });
                        [];
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

            api.post('/post/create',
                body,
                {
                    headers: headers
                }
            ).then(response => {
                if (201 === response.status) {
                    alert('Salvo com sucesso')
                    setAutor('')
                    setTitulo('')
                    setConteudo('')
                    navigate('/manager')
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    return (
        <Box sx={{ minWidth: 120 }}>
            <Box sx={{ maxWidth: '100%', marginTop: '20px' }}>
                <FormControlLabel control={<Checkbox checked={checked}
                    onChange={handleChange} />} label="Novo Autor" />
                {checked ?
                    //  <TextField value={_nome} onChange={handlerChangeNewAutor} fullWidth label="Novo Autor" id="newAutor" />

                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            value={_nome}
                            onChange={handlerChangeNewAutor}
                            placeholder="Digite o nome do Autor"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="add" onClick={handlerSubmitAutor}>
                            <AddIcon />
                        </IconButton>
                    </Paper>

                    : ''
                }
            </Box>
            <FormControl fullWidth style={{ marginTop: '10px' }}>
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
                        <Button variant="text" onClick={() => { voltar() }}>Voltar</Button>
                        <Button fullWidth
                            size="small"
                            color="success"
                            variant="contained"
                            style={{ color: 'white' }}
                            onClick={handlerSubmit}>Publicar</Button>
                    </Stack>
                </Box>
            </FormControl>
        </Box >

    );
}