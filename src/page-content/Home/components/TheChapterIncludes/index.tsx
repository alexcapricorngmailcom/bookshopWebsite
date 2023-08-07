import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { MAIN, BACKGROUND } from '../../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { TheChapterGridItem } from './components/TheChapterGridItem';
import { ButtonAction } from '../../../../design-system/Button';

export const TheChapterIncludes = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>The Chapter Includes</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <Grid container rowSpacing={4} columnSpacing={4} mt={'16px'}>
                        <TheChapterGridItem
                            title='Chapter-01 Get Started Intro'
                            paragraph='Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.'
                        />
                        <TheChapterGridItem
                            title='Chapter-02 Create a Massive Content'
                            paragraph='Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.'
                        />
                        <TheChapterGridItem
                            title='Chapter-03 Maintaining the Creative Arcs'
                            paragraph='Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.'
                        />
                        <TheChapterGridItem
                            title='Chapter-04 The Conclusion'
                            paragraph='Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.'
                        />
                    </Grid>
                    <Box sx={{mt:'80px'}}>
                        <ButtonAction size='large'>Start a 15-Days Free Trail</ButtonAction>
                        {/* <ButtonAction size='large' onClick={() => {}}>Start a 15-Days Free Trail</ButtonAction> */}
                    </Box>
                    <Paragraph sx={{mt:'30px'}}>Short description about each chapter</Paragraph>
                    <Stack flexDirection='row'>
                        <Link href="#" underline='none'><StyledParagraphLink>Have any questions?</StyledParagraphLink></Link>
                        <Paragraph sx={{ml:'5px'}}>Contact us</Paragraph>
                    </Stack>
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

const StyledParagraphLink = styled(Paragraph)`
    text-decoration: underline; 
    text-underline-offset: 5px; 
    color: ${MAIN};

    &:hover {
        text-decoration: none; 
    }

`;