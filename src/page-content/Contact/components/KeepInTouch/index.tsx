import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { ReactComponent as HomeIcon } from './assets/homeIcon.svg'
import { ReactComponent as EmailIcon } from './assets/emailIcon.svg'
import { ReactComponent as PhoneIcon } from './assets/phoneIcon.svg'
import { MAIN, WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH5, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { SquareMedium } from '../../../../design-system/geometry/squares';
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
                                    <SquareMedium>
                                        <HomeIcon stroke={MAIN} />
                                    </SquareMedium>
                                </Box>
                                <Box>
                                    <HeadingH5>Visit Us:</HeadingH5>
                                    <Link href="https://goo.gl/maps/dcZ6FuPiwY6LyBwL7" target='_blank' rel="noopener" underline='none'><Paragraph>24A Kingston St, Los Vegas NC 28202, USA</Paragraph></Link>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt:'22px'}}>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareMedium>
                                        <EmailIcon stroke={MAIN} />
                                    </SquareMedium>
                                </Box>
                                <Box>
                                    <HeadingH5>Drop Us:</HeadingH5>
                                    <Link href="mailto:support@pages.com" underline='none'><Paragraph>support@pages.com</Paragraph></Link>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt:'22px'}}>
                                <Box sx={{pl:'35px', pr:'35px'}}>
                                    <SquareMedium>
                                        <PhoneIcon stroke={MAIN} />
                                    </SquareMedium>
                                </Box>
                                <Box>
                                    <HeadingH5>Call Us:</HeadingH5>
                                    <Link href="tel: +18001239999" underline='none'><Paragraph>1-800-123-9999</Paragraph></Link>
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
    padding: 145px 0px;
    background-color: ${WHITE};
`;