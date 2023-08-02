import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import aboutTheAuthor from './assets/aboutTheAuthor.png'
import { BACKGROUND, WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH5, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { ButtonAction } from '../../../../design-system/Button';

export const AboutTheAuthor = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack>
                    <img src={aboutTheAuthor} alt="about the author" style={{width:'100%', height: '100%'}} />
    
                    <Grid container spacing={10} alignItems='center' sx={{mt:'0px'}}>
                        <Grid item md={5.5} sm={12}>
                            <StyledBackgroundBox>
                                <Stack flexDirection='row' justifyContent='space-between'>
                                    <StyledBox>
                                        <HeadingH5>Country :</HeadingH5>
                                        <HeadingH5>Language :</HeadingH5>
                                        <HeadingH5>Genre :</HeadingH5>
                                        <HeadingH5>Publication date :</HeadingH5>
                                        <HeadingH5>Share us on:</HeadingH5>
                                    </StyledBox>
                                    <StyledBox>
                                        <Paragraph>United Kingdom</Paragraph>
                                        <Paragraph>English</Paragraph>
                                        <Paragraph>Historiography</Paragraph>
                                        <Paragraph>1991</Paragraph>
                                        <Paragraph>Social media</Paragraph>
                                    </StyledBox>
                                </Stack>
                            </StyledBackgroundBox>
                        </Grid>
                        <Grid item md={6.5} sm={12}>
                            <HeadingH3>About Dr. John Abraham</HeadingH3>
                            <LineLarge sx={{mt:'22px'}} />
                            <Paragraph sx={{mt:'22px'}}>All the Lorem generators tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, that can combined with a handful of model sentence structures.</Paragraph>
                            <Box sx={{mt:'30px'}}>
                                <ButtonAction size='large'>Contact now</ButtonAction>
                            </Box>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 150px;
    padding-bottom: 150px;
    background-color: ${BACKGROUND};
`;

const StyledBackgroundBox = styled(Grid)`
    padding: 65px 50px;
    border: 2px solid #DFE9F8;
    background-color: ${WHITE};
`;

const StyledBox = styled(Box)`
    h5 + h5, p + p {
        margin-top: 20px;
    }
`;