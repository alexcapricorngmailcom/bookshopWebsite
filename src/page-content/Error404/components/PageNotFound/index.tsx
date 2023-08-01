import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import logo404 from './assets/Logo404.svg'
import backgroundImg from './assets/Error404.png'
import { HeadingH3, Paragraph } from '../../../../design-system/typography'
import { ButtonAction } from '../../../../design-system/Button';

export const PageNotFound = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack alignItems='center'>
                    <img src={logo404} alt="logo 404" />
                    <HeadingH3 sx={{mt:'35px'}}>Page not Found!!!</HeadingH3>
                    <StyledParagraph>The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</StyledParagraph>
                    <Box sx={{mt:'40px'}}>
                        <ButtonAction size='large'>Back to Home</ButtonAction>
                    </Box>
                </Stack>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding-bottom: 300px;
    padding-top: 300px;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
`;

const StyledParagraph = styled(Paragraph)`
    max-width: 600px; 
    margin-top: 16px;
    text-align: center;
`;