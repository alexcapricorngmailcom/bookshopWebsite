import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import { ReactComponent as PagesIcon } from '../../../shared/assets/icons/PagesIcon.svg'
import { ReactComponent as FacebookIcon } from '../../../shared/assets/icons/FacebookIcon.svg'
import { ReactComponent as TwitterIcon } from '../../../shared/assets/icons/TwitterIcon.svg'
import { ReactComponent as LinkedInIcon } from '../../../shared/assets/icons/LinkedInIcon.svg'
import { ReactComponent as InstagramIcon } from '../../../shared/assets/icons/InstagramIcon.svg'
import { MAIN, SECONDARY, WHITE } from '../../../design-system/colors';
import { HeadingH5, Paragraph } from '../../../design-system/typography';
import { SquareSmall } from '../../../design-system/geometry/squares';

export const Footer = () => {
    return(
        <StyledFooter>
            <Container maxWidth='lg'>
                <StyledContentStack flexDirection='row' justifyContent='space-between'>
                    <StyledBox>
                        <RouterLink to='/'>
                            <PagesIcon fill={MAIN}/>
                        </RouterLink>
                        <StyledBoxLogo>
                            <Link href='https://uk-ua.facebook.com/' target='_blank' rel="noopener">
                                <StyledSquareSmall>
                                    <StyledFacebookIcon height='18px'/>
                                </StyledSquareSmall>
                            </Link>
                            <Link href='https://twitter.com/' target='_blank' rel="noopener">
                                <StyledSquareSmall>
                                    <StyledTwitterIcon height='18px' />
                                </StyledSquareSmall>
                            </Link>
                            <Link href='https://ua.linkedin.com/' target='_blank' rel="noopener">
                                <StyledSquareSmall>
                                    <StyledLinkedInIcon height='18px' />
                                </StyledSquareSmall>
                            </Link>
                            <Link href='https://www.instagram.com/' target='_blank' rel="noopener">
                                <StyledSquareSmall>
                                    <StyledInstagramIcon height='18px' />
                                </StyledSquareSmall>
                            </Link>
                        </StyledBoxLogo>
                    </StyledBox>
                    <StyledStack>
                        <Box>
                            <StyledHeadingH5 sx={{color: WHITE}}>Explore</StyledHeadingH5>
                            
                            <StyledFirstItemStack flexDirection='row' alignItems='center' mt='40px'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/">Home</StyledFooterTextRouterLink>
                            </StyledFirstItemStack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/about">About Us</StyledFooterTextRouterLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/myStore">My Store</StyledFooterTextRouterLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/articles">Blog</StyledFooterTextRouterLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/contact">Contact Us</StyledFooterTextRouterLink>
                            </Stack>
                        </Box>

                        <Box>
                            <StyledHeadingH5 sx={{color: WHITE}}>Utility Pages</StyledHeadingH5>
                            
                            <StyledFirstItemStack flexDirection='row' alignItems='center' mt='40px'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/styleGuide">Style guide</StyledFooterTextRouterLink>
                            </StyledFirstItemStack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/Error404">404 not found</StyledFooterTextRouterLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/protectedPage">Password protected</StyledFooterTextRouterLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/licenses">Licenses</StyledFooterTextRouterLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <MoreHorizIcon fontSize='large' sx={{color: SECONDARY}} />
                                <StyledFooterTextRouterLink to="/changelog">Changelog</StyledFooterTextRouterLink>
                            </Stack>
                        </Box>

                        <Box>
                            <StyledHeadingH5 sx={{color: WHITE}}>Keep in Touch</StyledHeadingH5>
                            
                            <StyledFirstItemStack flexDirection='row' alignItems='flex-start' mt='40px'>
                                <HeadingH5 sx={{fontSize:'18px', color: WHITE}}>Address: </HeadingH5>
                                <StyledFooterTextLink href="https://goo.gl/maps/dcZ6FuPiwY6LyBwL7" target='_blank' rel="noopener">24A Kingston St, <br /> Los Vegas NC 28202, <br /> USA</StyledFooterTextLink>
                            </StyledFirstItemStack>
                            <Stack flexDirection='row' alignItems='center'>
                                <HeadingH5 sx={{fontSize:'18px', color: WHITE}}>Mail:</HeadingH5>
                                <StyledFooterTextLink href="mailto:support@pages.com">support@pages.com</StyledFooterTextLink>
                            </Stack>
                            <Stack flexDirection='row' alignItems='center'>
                                <HeadingH5 sx={{fontSize:'18px', color: WHITE}}>Phone:</HeadingH5>
                                <StyledFooterTextLink href="tel: +18001239999">1-800-123-9999</StyledFooterTextLink>
                            </Stack>
                        </Box>
                    </StyledStack>
                </StyledContentStack>
                <StyledLineBox></StyledLineBox>
                <Box sx={{mt: "25px", textAlign: 'center'}}>
                    <Paragraph sx={{display:'inline', color: '#B4C7E7'}}>&#169; Drafted by </Paragraph>  
                    <Paragraph sx={{display:'inline', color:WHITE}}>Victorflow </Paragraph> 
                    <Paragraph sx={{display:'inline', color: '#B4C7E7'}}>- Powered by </Paragraph>  
                    <Paragraph sx={{display:'inline', color:WHITE}}>Webflow</Paragraph>
                </Box>
            </Container>
        </StyledFooter>
        
    );
}

const StyledFooter = styled('footer')`
    padding-top: 85px;
    padding-bottom: 25px;
    background-color: ${MAIN};
`;

const StyledContentStack = styled(Stack)`
    @media (max-width: 1199px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledBox = styled(Box)`
    @media (max-width: 1199px) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

`;

const StyledBoxLogo = styled(Box)`
    display: flex;
    margin-top: 30px;

    & > a + a {
        margin-left: 10px;
    }

    @media (max-width: 1199px) {
        margin-top: 0px;
        margin-left: 40px;
    }
`;

const StyledStack = styled(Stack)`
    flex-direction: row; 
    justify-content: space-between; 
    width: 65%;
    
    @media (max-width: 1199px) {
        width: 85%;
    }
    @media (max-width: 1199px) {
        margin-top: 45px;
    }


    @media (max-width: 899px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 40%;
        margin-top: 0px;
    }
`;

const StyledHeadingH5 = styled(HeadingH5)`

    @media (max-width: 899px) {
        text-align: center;
        margin-top: 35px;
    }
`;

const StyledFirstItemStack = styled(Stack)`

    @media (max-width: 899px) {
        margin-top: 30px;
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

const StyledFooterTextRouterLink = styled(RouterLink)`
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

const StyledLineBox = styled(Box)`
    width: 100%;
    height: 1px;
    margin-top: 75px;
    background-color: ${WHITE};
`;

const StyledSquareSmall = styled(SquareSmall)`
    background-color: transparent;
    border: 1px solid ${SECONDARY};

    &:hover * {
        fill: ${SECONDARY};
    }
`;

const StyledFacebookIcon = styled(FacebookIcon)`
    fill: ${WHITE};
`;

const StyledTwitterIcon = styled(TwitterIcon)`
    fill: ${WHITE};
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
    fill: ${WHITE};
`;

const StyledInstagramIcon = styled(InstagramIcon)`
    fill: ${WHITE};
`;