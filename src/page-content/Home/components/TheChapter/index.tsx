import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { BACKGROUND, MAIN } from '../../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { TheCapterGridItem } from './components/TheCapterGridItem';
import { ButtonAction } from '../../../../design-system/Button';

//TODO check button width after button will update

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
                    <Box sx={{mt: '80px'}}>
                        <ButtonAction size='large' onClick={() => {}}>Start a 15-Days Free Trail</ButtonAction>
                    </Box>
                    <Paragraph sx={{mt:'30px'}}>Short description about each chapter</Paragraph>
                    <Paragraph><a href="#" style={{textDecoration: 'underline', textUnderlineOffset: '5px', color: MAIN}}>Have any questions?</a> Contact us</Paragraph>
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