import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import { ReactComponent as PagesIcon } from '../../../shared/assets/icons/pagesIcon.svg'
import { ReactComponent as FacebookIcon } from '../../../shared/assets/icons/facebookIcon.svg'
import { ReactComponent as TwitterIcon } from '../../../shared/assets/icons/twitterIcon.svg'
import { ReactComponent as LinkedInIcon } from '../../../shared/assets/icons/linkedInIcon.svg'
import { ReactComponent as InstagramIcon } from '../../../shared/assets/icons/instagramIcon.svg'
import { MAIN, SECONDARY, WHITE } from '../../../design-system/colors';
import { HeadingH5, Paragraph } from '../../../design-system/typography';
import { SquareMediumOutlined } from '../../../design-system/geometry/squares';

export const Footer = () => {
    return(
        <StyledFooter>
            <Container maxWidth='lg'>
                <Stack flexDirection='row' justifyContent='space-between' width='100%'>
                    <Box width='35%'>
                        <RouterLink to='/'>
                            <PagesIcon fill={MAIN}/>
                        </RouterLink>
                        <StyledBoxLogo>
                            <Link href='https://uk-ua.facebook.com/' target='_blank' rel="noopener">
                                <SquareMediumOutlined>
                                    <StyledFacebookIcon />
                                </SquareMediumOutlined>
                            </Link>
                            <Link href='https://twitter.com/' target='_blank' rel="noopener">
                                <SquareMediumOutlined>
                                    <StyledTwitterIcon />
                                </SquareMediumOutlined>
                            </Link>
                            <Link href='https://ua.linkedin.com/' target='_blank' rel="noopener">
                                <SquareMediumOutlined>
                                    <StyledLinkedInIcon />
                                </SquareMediumOutlined>
                            </Link>
                            <Link href='https://www.instagram.com/' target='_blank' rel="noopener">
                                <SquareMediumOutlined>
                                    <StyledInstagramIcon/>
                                </SquareMediumOutlined>
                            </Link>
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
                                <StyledFooterTextLink href="https://goo.gl/maps/dcZ6FuPiwY6LyBwL7" target='_blank'>24A Kingston St, <br /> Los Vegas NC 28202, <br /> USA</StyledFooterTextLink>
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
                <StyledBox></StyledBox>
                <Paragraph sx={{mt: "25px", textAlign: 'center'}}>
                    <Paragraph sx={{display:'inline', color: '#B4C7E7'}}>&#169; Drafted by </Paragraph>  
                    <Paragraph sx={{display:'inline', color:WHITE}}>Victorflow </Paragraph> 
                    <Paragraph sx={{display:'inline', color: '#B4C7E7'}}>- Powered by </Paragraph>  
                    <Paragraph sx={{display:'inline', color:WHITE}}>Webflow</Paragraph>
                </Paragraph>

            </Container>
        </StyledFooter>
        
    );
}

const StyledFooter = styled('footer')`
    padding-top: 85px;
    padding-bottom: 25px;
    background-color: ${MAIN};
`;

const StyledBoxLogo = styled(Box)`
    display: flex;
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

const StyledBox = styled(Box)`
    width: 100%;
    height: 1px;
    margin-top: 75px;
    background-color: ${WHITE};
`;

const StyledFacebookIcon = styled(FacebookIcon)`
    fill: ${WHITE};

    &:hover {
        fill: ${SECONDARY};
    }
`;

const StyledTwitterIcon = styled(TwitterIcon)`
    fill: ${WHITE};

    &:hover {
        fill: ${SECONDARY};
    }
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
    fill: ${WHITE};

    &:hover {
        fill: ${SECONDARY};
    }
`;

const StyledInstagramIcon = styled(InstagramIcon)`
    fill: ${WHITE};

    &:hover {
        fill: ${SECONDARY};
    }
`;