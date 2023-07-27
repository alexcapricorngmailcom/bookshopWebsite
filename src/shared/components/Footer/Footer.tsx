import { styled } from '@mui/material/styles';
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import logoPages from './assets/logoPages.png'
import logoFacebook from './assets/logoFacebook.png'
import logoTwitter from './assets/logoTwitter.png'
import logoLinkedIn from './assets/logoLinkedIn.png'
import logoInstagram from './assets/logoInstagram.png'
import { MAIN, SECONDARY, WHITE } from '../../../design-system/colors';
import { HeadingH5 } from '../../../design-system/typography';

export const Footer = () => {
    return(
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='row' justifyContent='space-between' width='100%'>
                    <Box width='35%'>
                        <Link href='#'><img src={logoPages} alt="pages logo" /></Link>
                        <StyledBoxLogo>
                            <Link href='https://uk-ua.facebook.com/'><img src={logoFacebook} alt="Facebook logo" /></Link>
                            <Link href='https://twitter.com/'><img src={logoTwitter} alt="Twitter logo" /></Link>
                            <Link href='https://ua.linkedin.com/'><img src={logoLinkedIn} alt="LinkedIn logo" /></Link>
                            <Link href='https://www.instagram.com/'><img src={logoInstagram} alt="Instagram logo" /></Link>
                        </StyledBoxLogo>
                    </Box>
                    <Stack flexDirection='row' justifyContent='space-between' width='65%'>
                        <Box>
                            <HeadingH5 sx={{color: WHITE}}>Explore</HeadingH5>
                            
                            <Stack flexDirection='row' alignItems='center' mt='40px'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Home</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">About Us</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Services</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Appointments</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Blog</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Contact Us</StyledFooterTextLink>
                            </Stack>
                        </Box>

                        <Box>
                            <HeadingH5 sx={{color: WHITE}}>Utility Pages</HeadingH5>
                            
                            <Stack flexDirection='row' alignItems='center' mt='40px'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Start here</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Style guide</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">404 not found</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Password protected</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Licenses</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextLink href="#">Changelog</StyledFooterTextLink>
                            </Stack>
                        </Box>

                        <Box>
                            <HeadingH5 sx={{color: WHITE}}>Keep in Touch</HeadingH5>
                            
                            <Stack flexDirection='row' alignItems='flex-start' mt='40px'>
                                <HeadingH5 sx={{fontSize:'18px', color: WHITE}}>Address: </HeadingH5>
                                <StyledFooterTextLink href="https://goo.gl/maps/dcZ6FuPiwY6LyBwL7">24A Kingston St, <br /> Los Vegas NC 28202, <br /> USA</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <HeadingH5 sx={{fontSize:'18px', color: WHITE}}>Mail:</HeadingH5>
                                <StyledFooterTextLink href="mailto:support@doctors.com">support@doctors.com</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <HeadingH5 sx={{fontSize:'18px', color: WHITE}}>Phone:</HeadingH5>
                                <StyledFooterTextLink href="tel: +221234567900">(+22) 123 - 4567 - 900</StyledFooterTextLink>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>

            </Container>
        </StyledSection>
        
    );
}

const StyledSection = styled('section')`
    padding-top: 85px;
    padding-bottom: 25px;
    background-color: ${MAIN};
`;

const StyledBoxLogo = styled(Box)`
    margin-top: 30px;

    & > a + a {
        margin-left: 10px;
    }
`;

const StyledFooterTextLink = styled(Link)`
    margin-left: 10px;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: -0.01em;
    text-decoration: none;
    color: #B4C7E7;

    &:hover, &:active {
        text-decoration: underline;
    }
`;