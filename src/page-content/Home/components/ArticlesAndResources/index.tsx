import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import articlesAndResourcesImg1 from './assets/articlesAndResourcesImg1.png'
import articlesAndResourcesImg2 from './assets/articlesAndResourcesImg2.png'
import articlesAndResourcesImg3 from './assets/articlesAndResourcesImg3.png'
import { BACKGROUND } from '../../../../design-system/colors';
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { Article } from '../../../../shared/components/Article/Article';


export const ArticlesAndResources = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Articles & Resources</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <Grid container spacing={4} mt='16px'>
                        <Grid item lg={4}>
                            <Article
                                title='The energy efficiency offers hydrotherapy or swim'
                                paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                                author='Author - 23.05.2022'
                                img={articlesAndResourcesImg1}
                                alt='blog image 1'
                            />
                        </Grid>
                        <Grid item lg={4}>
                            <Article
                                title='Release of Letraset sheets tools containing  passages'
                                paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                                author='Author - 23.05.2022'
                                img={articlesAndResourcesImg2}
                                alt='blog image 2'
                            />
                        </Grid>
                        <Grid item lg={4}>
                            <Article
                                title='The energy efficiency offers hydrotherapy or swim'
                                paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                                author='Author - 23.05.2022'
                                img={articlesAndResourcesImg3}
                                alt='blog image 3'
                            />
                        </Grid>
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