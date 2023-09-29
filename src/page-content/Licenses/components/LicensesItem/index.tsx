import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { WHITE } from '../../../../design-system/colors';
import { HeadingH4, HeadingH6, Paragraph } from '../../../../design-system/typography';

export const LicensesItem = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <HeadingH4>Photography</HeadingH4>
                <Paragraph sx={{mt:'10px'}}>All images used in the <HeadingH6 sx={{display:'inline-block'}}>Pages</HeadingH6> Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on <HeadingH6 sx={{display:'inline-block'}}>Unsplash, Pexels.</HeadingH6></Paragraph>
                <HeadingH6 sx={{mt:'40px'}}>Pexels:</HeadingH6>
                <Paragraph sx={{mt:'10px'}}>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8</Paragraph>
                <HeadingH6 sx={{mt:'40px'}}>Unsplash:</HeadingH6>
                <Paragraph sx={{mt:'10px'}}>Image 1, Image 2, Image 3</Paragraph>
                <HeadingH4 sx={{mt:'40px'}}>Fonts</HeadingH4>
                <Paragraph sx={{mt:'10px'}}>Pages template uses free licensed <HeadingH6 sx={{display:'inline-block'}}>Google Fonts.</HeadingH6> Please check <HeadingH6 sx={{display:'inline-block'}}>Cardo</HeadingH6> and <HeadingH6 sx={{display:'inline-block'}}>Inter.</HeadingH6></Paragraph>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};

    @media (max-width: 599px) {
        padding: 125px 0px;
    }
`;