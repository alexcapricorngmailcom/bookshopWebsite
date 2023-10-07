import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { MAIN, WHITE } from '../../../../design-system/colors';
import { HeadingH4, HeadingH6, Paragraph } from '../../../../design-system/typography';

export const LicensesItem = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <HeadingH4>Photography</HeadingH4>
                <Paragraph sx={{mt:'10px'}}>All images used in the <StyledSpan>Pages</StyledSpan> Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on <StyledSpan>Unsplash, Pexels.</StyledSpan></Paragraph>
                <HeadingH6 sx={{mt:'40px'}}>Pexels:</HeadingH6>
                <Paragraph sx={{mt:'10px'}}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8</Paragraph>
                <HeadingH6 sx={{mt:'40px'}}>Unsplash:</HeadingH6>
                <Paragraph sx={{mt:'10px'}}>Image 1, Image 2, Image 3</Paragraph>
                <HeadingH4 sx={{mt:'40px'}}>Fonts</HeadingH4>
                <Paragraph sx={{mt:'10px'}}>Pages template uses free licensed <StyledSpan>Google Fonts.</StyledSpan> Please check <StyledSpan>Cardo</StyledSpan> and <StyledSpan>Inter.</StyledSpan></Paragraph>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledSpan = styled('span')`
    font-family: Cardo, serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.015em;
    color: ${MAIN};
`;
