import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import blogImg1 from './assets/blogImg1.png'
import blogImg2 from './assets/blogImg2.png'
import blogImg3 from './assets/blogImg3.png'
import { BACKGROUND } from '../../../../design-system/colors';
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { BlogGridItem } from './components';


export const Blog = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Articles & Resources</HeadingH3>
                    <LineLarge sx={{marginTop:'22px'}} />
                    <Grid container spacing={4} mt='16px'>
                        <BlogGridItem
                            title='The energy efficiency offers hydrotherapy or swim'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={blogImg1}
                            alt='blog image 1'
                        />
                        <BlogGridItem
                            title='Release of Letraset sheets tools containing  passages'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={blogImg2}
                            alt='blog image 2'
                        />
                        <BlogGridItem
                            title='The energy efficiency offers hydrotherapy or swim'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={blogImg3}
                            alt='blog image 3'
                        />
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