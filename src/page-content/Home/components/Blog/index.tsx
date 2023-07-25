import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import blogImg1 from './assets/blogImg1.png'
import blogImg2 from './assets/blogImg2.png'
import blogImg3 from './assets/blogImg3.png'
import { BACKGROUND, WHITE } from '../../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';


export const Blog = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Articles & Resources</HeadingH3>
                    <LineLarge sx={{marginTop:'22px'}} />
                    <Grid container spacing={3}>
                        <Grid item lg={4}>
                            <article>
                                <Box width='100%' height='326px'>
                                    <img src={blogImg1} alt="blog image 1" style={{width:'100%', height:'100%', objectFit:'cover'}} />
                                </Box>

                            </article>
                        </Grid>
                        <Grid item lg={4}></Grid>
                        <Grid item lg={4}></Grid>
                    </Grid>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${BACKGROUND};
`;