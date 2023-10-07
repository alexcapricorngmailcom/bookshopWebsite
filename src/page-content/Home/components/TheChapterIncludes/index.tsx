import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { MAIN, BACKGROUND } from '../../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { TheChapterGridItem } from './components/TheChapterGridItem';
import { ButtonAction } from '../../../../design-system/Button';

export const TheChapterIncludes = ({scrollOnClick}:{scrollOnClick: () => void}) => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3 sx={{textAlign:'center'}}>The Chapter Includes</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <StyledGrid container rowSpacing={4} columnSpacing={4}>
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
                    </StyledGrid>
                    <Box sx={{mt:'80px'}}>
                        <ButtonAction size='large' onClick={scrollOnClick}>Start a 15-Days Free Trail</ButtonAction>
                    </Box>
                    <Paragraph sx={{mt:'30px'}}>Short description about each chapter</Paragraph>
                    <Stack flexDirection='row'>
                        <RouterLink to="/contact" ><StyledParagraphLink>Have any questions?</StyledParagraphLink></RouterLink>
                        <Paragraph sx={{ml:'5px'}}>Contact us</Paragraph>
                    </Stack>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${BACKGROUND};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledParagraphLink = styled(Paragraph)`
    text-decoration: underline; 
    text-underline-offset: 5px; 
    color: ${MAIN};

    &:hover {
        text-decoration: none; 
    }
`;

const StyledGrid = styled(Grid)`
    margin-top: 10px;

    @media (max-width: 1199px) {
        & > * {
            max-width: 585px;
            margin: 0 auto;
        }
    }
`;
