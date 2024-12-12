import React, { useState, useEffect, useReducer } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, Stack, TableHead } from '@mui/material';
import { Post } from '../common/common.entity';
import api from '../api';
import postReducer from '../reducer/postReducer';
import { styled } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

const initialStatePost = { posts: [] as Post[] };

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

export function formatDate(date: any) {
  return new Date(date).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function ManagerPost() {
  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [statePost, dispatchPost] = useReducer(postReducer, initialStatePost);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - statePost.posts.length) : 0;

  const rows = [
    createData('Cupcake', 305, 3.7),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

  useEffect(() => {
    api.get('/post/all')
      .then(response => {
        dispatchPost({ type: 'SET_POSTS', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const setEdit = (post: Post) => {
    navigate('/update-post/' + post._id)
  }

  const removePost = (post: Post) => {
    if (!post)
      return;
    if (sessionStorage.getItem('token')) {

      let jwtStr = sessionStorage.getItem('token')?.toString();


      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + jwtStr
      }

      api.delete('/post/remove/' + post._id,
        {
          headers: headers
        })
        .then(response => {
          if (200 === response.status) {
            alert('Removido com sucesso')
            api.get('/post/all')
              .then(response => {
                dispatchPost({ type: 'SET_POSTS', payload: response.data });
              })
              .catch(error => {
                console.error('Error fetching tasks:', error);
              });
            [];
          }
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
      [];
    } else {
      alert('Não autenticado')
    }
  }


  const addPost = () => {
    navigate('/post-add')
  }

  return (
    <Box>

      <Stack spacing={2} direction="row">
        <Button color="success" variant="contained" size="small"
          onClick={() => { addPost() }}
          style={{ color: 'white' }}>
          Adicionar Post
        </Button>
      </Stack>
      <TableContainer component={Paper} style={{marginTop: '10px'}}>
        <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Titulo</StyledTableCell>
              <StyledTableCell align="center">Conteúdo</StyledTableCell>
              <StyledTableCell align="center">Data</StyledTableCell>
              <StyledTableCell align="center">Editar</StyledTableCell>
              <StyledTableCell align="center">Remover</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? statePost.posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : statePost.posts
            ).map((post: Post) => (
              <TableRow key={post._id}>
                <TableCell style={{ width: 160 }} align="left">
                  {post.titulo}
                </TableCell>
                <TableCell component="th">
                  {post.conteudo?.substring(0, 100)}...
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {formatDate(post.dtCriacao)}
                </TableCell>
                <TableCell style={{ width: 70 }} align="right">
                  <Button color="success" style={{color: 'white'}} variant="contained"  onClick={() => {
                    setEdit(post)
                  }}>Editar</Button>
                </TableCell>
                <TableCell style={{ width: 70 }} align="right">
                  <Button color="error" variant="contained" onClick={() => {
                    removePost(post)
                  }}>Remover</Button>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={statePost.posts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}