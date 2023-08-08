import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import myStory from './assets/myStory.png'
import { WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH5, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { SquareMedium } from '../../../../design-system/geometry/squares';

export const MyStory = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={12} alignItems='center'>
                    <Grid item md={6} sm={12}> 
                        <HeadingH3>My Story</HeadingH3>
                        <LineLarge sx={{mt:'22px'}} />
                        <Paragraph sx={{mt:'22px'}}>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</Paragraph>
                        <Stack sx={{mt:'40px'}}>
                            <Stack flexDirection='row'>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareMedium>
                                        <HeadingH5>01</HeadingH5>
                                    </SquareMedium>
                                </Box>
                                <Box>
                                    <HeadingH5 sx={{lineHeight:'95%'}}>Great Author Awards - 1996 & 2000</HeadingH5>
                                    <Paragraph sx={{mt:'17px'}}>How to navigate around the interface and toggle on/off the panels you wish to use.</Paragraph>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt:'35px'}}>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareMedium>
                                        <HeadingH5>02</HeadingH5>
                                    </SquareMedium>
                                </Box>
                                <Box>
                                    <HeadingH5 sx={{lineHeight:'95%'}}>10 times NYT &#174; Best Seller</HeadingH5>
                                    <Paragraph sx={{mt:'17px'}}>How to navigate around the interface and toggle on/off the panels you wish to use.</Paragraph>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt:'35px'}}>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareMedium>
                                        <HeadingH5>03</HeadingH5>
                                    </SquareMedium>
                                </Box>
                                <Box>
                                    <HeadingH5 sx={{lineHeight:'95%'}}>Writer of Hack Productivity</HeadingH5>
                                    <Paragraph sx={{mt:'17px'}}>How to navigate around the interface and toggle on/off the panels you wish to use.</Paragraph>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Box sx={{filter: 'drop-shadow(0 35px 45px rgba(4, 11, 20, 0.15))'}}>
                            <img src={myStory} style={{width: '100%', height: '100%'}} alt="about author" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};
`;