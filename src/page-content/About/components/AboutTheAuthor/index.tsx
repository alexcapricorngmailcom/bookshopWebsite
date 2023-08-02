import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import aboutTheAuthor from './assets/aboutTheAuthor.png'
import { BACKGROUND, MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH2, HeadingH3, HeadingH6, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { ButtonAction } from '../../../../design-system/Button';

export const AboutTheAuthor = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <img src={aboutTheAuthor} alt="about the author" style={{width:'100%', height: '100%'}} />
                
                <Grid container>
                    <Grid item md={6} sm={12}>
                        
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <HeadingH3>About Dr. John Abraham</HeadingH3>
                        <LineLarge sx={{marginTop:'22px'}} />
                        <Paragraph sx={{marginTop: '22px'}}>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, that can combined with a handful of model sentence structures.</Paragraph>
                        <ButtonAction size='large'>Contact now</ButtonAction>
                    </Grid>

                </Grid>

            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 150px;
    padding-bottom: 150px;
    background-color: ${BACKGROUND};
`;

const StyledGridContainer = styled(Grid)`
    width: 477px;
    height: 160px;
    margin-top: 40px;
    padding: 15px;
    align-items: center;
    background-color: ${MAIN};
`;

const StyledStack = styled(Stack)`
    width: 130px;
    height: 130px;
    justify-content: center;
    align-items: center;
    background-color: ${WHITE};
`;

const StyledLink = styled(Link)`
    font-family: Inter, sans-serif;
    font-size: 19px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: -0.01em;
    color: #B4C7E7;

    &:hover, &:active {
        text-decoration: underline;
    }
`;