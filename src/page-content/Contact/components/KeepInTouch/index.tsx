import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { ReactComponent as HomeIcon } from './assets/homeIcon.svg'
import { ReactComponent as EmailIcon } from './assets/emailIcon.svg'
import { ReactComponent as PhoneIcon } from './assets/phoneIcon.svg'
import { MAIN, WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH5, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { SquareLarge } from '../../../../design-system/geometry/squares';
import { Form } from '../../../../design-system/Form';

export const KeepInTouch = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={12} alignItems='center'>
                    <Grid item md={6} sm={12}> 
                        <HeadingH3>Keep in Touch</HeadingH3>
                        <LineLarge sx={{mt:'22px'}} />
                        <Paragraph sx={{mt:'22px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.</Paragraph>
                        <Stack sx={{mt:'40px'}}>
                            <Stack flexDirection='row' >
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareLarge>
                                        <HomeIcon stroke={MAIN} />
                                    </SquareLarge>
                                </Box>
                                <Box>
                                    <HeadingH5>Visit Us :</HeadingH5>
                                    <Paragraph sx={{mt:'0px'}}>No: 09a, Downtown, San Diego, USA.</Paragraph>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt:'22px'}}>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareLarge>
                                        <EmailIcon stroke={MAIN} />
                                    </SquareLarge>
                                </Box>
                                <Box>
                                    <HeadingH5>Drop Us :</HeadingH5>
                                    <Paragraph sx={{mt:'0px'}}>support@pages.com</Paragraph>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt:'22px'}}>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareLarge>
                                        <PhoneIcon stroke={MAIN} />
                                    </SquareLarge>
                                </Box>
                                <Box>
                                    <HeadingH5>Call Us :</HeadingH5>
                                    <Paragraph sx={{mt:'0px'}}>Call: 1-800-123-9999</Paragraph>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Form />
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