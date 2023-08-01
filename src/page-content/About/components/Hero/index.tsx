import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { MAIN, WHITE } from '../../../../design-system/colors'
import { HeadingH1, Paragraph } from '../../../../design-system/typography'
import { LineLarge } from '../../../../design-system/geometry/lines'

export const Hero = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack alignItems='center'>
                    <HeadingH1 sx={{color: WHITE}}>About the Author</HeadingH1>
                    <LineLarge sx={{marginTop: '32px'}} />
                    <StyledParagraph>There are many variations of passages of Lorem available, but the majority have suffered alteration in some form.</StyledParagraph>
                </Stack>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding-top: 225px;
    padding-bottom: 250px;
    background-color: ${MAIN};
`;

const StyledParagraph = styled(Paragraph)`
    max-width: 600px; 
    margin-top: 35px;
    text-align: center; 
    color: #B4C7E7;
`;