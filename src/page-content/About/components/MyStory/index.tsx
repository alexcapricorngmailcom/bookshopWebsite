import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import myStory from './assets/myStory.png'
import { MAIN, WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH5, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { SquareLarge } from '../../../../design-system/geometry/squares';

export const MyStory = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={12} alignItems='center'>
                    <Grid item md={6} sm={12}> 
                        <HeadingH3>My Story</HeadingH3>
                        <LineLarge sx={{mt:'22px'}} />
                        <Paragraph sx={{mt: '22px'}}>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</Paragraph>
                        <Stack>
                            <Stack flexDirection='row' sx={{mt: '22px'}}>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareLarge>
                                        <HeadingH5>01</HeadingH5>
                                    </SquareLarge>
                                </Box>
                                <Box>
                                    <HeadingH5 sx={{lineHeight:'90%'}}>Great Author Awards - 1996 & 2000</HeadingH5>
                                    <Paragraph sx={{mt: '17px'}}>How to navigate around the interface and toggle on/off the panels you wish to use.</Paragraph>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt: '22px'}}>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareLarge>
                                        <HeadingH5>02</HeadingH5>
                                    </SquareLarge>
                                </Box>
                                <Box>
                                    <HeadingH5 sx={{lineHeight:'90%'}}>10th New York Times &#174; Best Seller</HeadingH5>
                                    <Paragraph sx={{mt: '17px'}}>How to navigate around the interface and toggle on/off the panels you wish to use.</Paragraph>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt: '22px'}}>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareLarge>
                                        <HeadingH5>03</HeadingH5>
                                    </SquareLarge>
                                </Box>
                                <Box>
                                    <HeadingH5 sx={{lineHeight:'90%'}}>Writer of Hack Productivity</HeadingH5>
                                    <Paragraph sx={{mt: '17px'}}>How to navigate around the interface and toggle on/off the panels you wish to use.</Paragraph>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={6} sm={12}> 
                        <img src={myStory} style={{width: '100%', height: '100%'}} alt="about author" />
                    </Grid>
                </Grid>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 150px;
    padding-bottom: 150px;
    background-color: ${WHITE};
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