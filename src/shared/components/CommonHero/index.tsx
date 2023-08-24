import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { MAIN, PARAGRAPH_SECONDARY, WHITE } from '../../../design-system/colors'
import { HeadingH1, Paragraph } from '../../../design-system/typography'
import { LineLarge } from '../../../design-system/geometry/lines'

export const CommonHero = ({title, paragraph}:HeroProps) => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack alignItems='center' textAlign='center'>
                    <HeadingH1 sx={{color: WHITE}}>{title}</HeadingH1>
                    <LineLarge sx={{mt:'32px'}} />
                    <StyledParagraph>{paragraph}</StyledParagraph>
                </Stack>
            </Container>
        </StyledSection>
    )
}

type HeroProps = {
    title: string;
    paragraph: string;
}

const StyledSection = styled('section')`
    padding-top: 225px;
    padding-bottom: 125px;
    background-color: ${MAIN};
`;

const StyledParagraph = styled(Paragraph)`
    max-width: 600px; 
    margin-top: 35px;
    color: ${PARAGRAPH_SECONDARY};
`;