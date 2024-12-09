// components/PostList.tsx
import React from 'react';
import { AuthorProps, CompletedPostProps } from '../common/common.entity';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

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

function Author({_date, authors }: {_date: any, authors: AuthorProps[] | undefined }) {
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
                    {authors?.map((author) => author.nome)}
                </Typography>
            </Box>
            <Typography variant="caption">{_date}</Typography>
        </Box>
    );
}

export function formatDate(date: any) {
    return new Date(date).toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
}

const PostList: React.FC<CompletedPostProps> = ({ posts }) => {
    const navigate = useNavigate();

   return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

            <Box
                sx={{
                    display: { xs: 'flex', sm: 'none' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
                }}
            >
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'start', md: 'center' },
                    gap: 4,
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'row',
                        gap: 1,
                        width: { xs: '100%', md: 'fit-content' },
                        overflow: 'auto',
                    }}
                >
                </Box>
            </Box>

            <Grid container spacing={2} columns={12}>
                {Array.from(Array(posts.length)).map((_, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }}>
                        <SyledCard
                            variant="outlined"
                            tabIndex={0}
                            onClick={() => navigate('/post/' + posts[index]._id)}
                        >
                            <SyledCardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {posts[index].titulo}
                                </Typography>
                                <StyledTypography sx={{ mt: 2 }} variant="body2" color="text.secondary" gutterBottom>
                                    {posts[index].conteudo}
                                </StyledTypography>
                            </SyledCardContent>
                            <Author authors={posts[index].autor} _date={formatDate(posts[index].dtCriacao)} />
                        </SyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PostList;
