import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';



export default function Blog() {
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h3" gutterBottom>
            Brabo Jiu Jitsu
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h5" gutterBottom>
            História
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="body1" gutterBottom>
          O jiu-jítsu teve origem três mil anos antes de Cristo, provavelmente na Índia, onde era praticado por monges budistas. Os monges budistas precisavam se defender contra saqueadores durante suas viagens. Como o Budismo proibia o uso de armas, eles desenvolveram uma forma de luta para se protegerem.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
