import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { BACKGROUND } from '../../../../design-system/colors';
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { TheCapterGridItem } from './components/TheCapterGridItem';


export const TheChapter = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>The Chapter Includes</HeadingH3>
                    <LineLarge sx={{marginTop:'22px'}} />
                    <Grid container rowSpacing={4} columnSpacing={4} mt={'16px'}>
                        <TheCapterGridItem
                            title='Chapter-01 Get Started Intro'
                            paragraph='Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.'
                        />
                        <TheCapterGridItem
                            title='Chapter-02 Create a Massive Content'
                            paragraph='Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.'
                        />
                        <TheCapterGridItem
                            title='Chapter-03 Maintaining the Creative Arcs'
                            paragraph='Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.'
                        />
                        <TheCapterGridItem
                            title='Chapter-04 The Conclusion'
                            paragraph='Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.'
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