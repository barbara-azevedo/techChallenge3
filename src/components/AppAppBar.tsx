import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './EducaOnlineIcon';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme).palette.divider,
  backgroundColor: theme
    ? `rgba(${theme.palette.background} / 0.4)`
    : alpha(theme, 0.4),
  boxShadow: (theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const logout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.clear();
  };

  const LoginpPage = () => {
    navigate('/login')
  }

  const homePage = () => {
    navigate('/')
  }

  const editPost = () => {
    navigate('/post-edit')
  }

  const novoPost = () => {
    navigate('/post-add')
  }

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to='/' style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>Home</Link>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex', marginLeft: 10 } }} >
              <Link to='/post-edit' style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>Edit Posts</Link>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex', marginLeft: 10 } }} >
              <Link to='/post-add' style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>Novo Post</Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button color="primary" variant="text" size="small">
              <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
            </Button>
            <Button color="primary" variant="text" size="small" style={{ fontWeight: 'bold', color: 'red' }} onClick={logout}>Logout
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem>
                  <Button color="primary" style={{ fontWeight: 'bold', color: 'black' }} variant="outlined" fullWidth onClick={homePage}>Home
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" style={{ fontWeight: 'bold', color: 'black' }} variant="outlined" fullWidth onClick={editPost}>Edit Posts
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" style={{ fontWeight: 'bold', color: 'black' }} variant="outlined" fullWidth onClick={novoPost}>Novo Post
                  </Button>
                </MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth onClick={LoginpPage}>Login
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth onClick={logout} style={{ fontWeight: 'bold', color: 'red' }}>Logout
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
