import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import articlesResourcesImg1 from './assets/articlesResourcesImg1.png'
import articlesResourcesImg2 from './assets/articlesResourcesImg2.png'
import articlesResourcesImg3 from './assets/articlesResourcesImg3.png'
import { BACKGROUND } from '../../../../design-system/colors';
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { ArticlesResourcesGridItem } from './components/ArticlesResourcesGridItem';

export const ArticlesResources = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Articles & Resources</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <Grid container spacing={4} mt='16px'>
                        <ArticlesResourcesGridItem
                            title='The energy efficiency offers hydrotherapy or swim'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={articlesResourcesImg1}
                            alt='blog image 1'
                        />
                        <ArticlesResourcesGridItem
                            title='Release of Letraset sheets tools containing  passages'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={articlesResourcesImg2}
                            alt='blog image 2'
                        />
                        <ArticlesResourcesGridItem
                            title='The energy efficiency offers hydrotherapy or swim'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={articlesResourcesImg3}
                            alt='blog image 3'
                        />
                    </Grid>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${BACKGROUND};
`;