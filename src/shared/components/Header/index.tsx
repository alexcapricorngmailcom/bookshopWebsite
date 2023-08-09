import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link as RouterLink } from 'react-router-dom'

import { ReactComponent as PagesIcon } from '../../../shared/assets/icons/pagesIcon.svg'
import { ReactComponent as FacebookIcon } from '../../../shared/assets/icons/facebookIcon.svg'
import { ReactComponent as TwitterIcon } from '../../../shared/assets/icons/twitterIcon.svg'
import { ReactComponent as LinkedInIcon } from '../../../shared/assets/icons/linkedInIcon.svg'
import { MAIN, SECONDARY, WHITE } from '../../../design-system/colors';
import { ButtonAction } from "../../../design-system/Button";
import { SquareSmall } from "../../../design-system/geometry/squares";

export const Header = () => {
    return(
        <StyledHeader>
            <Container maxWidth='lg'>
                <StyledNav>
                    <Stack flexDirection='row' alignItems='center'>
                        <Box>
                            <RouterLink to='/'>
                                <PagesIcon fill={MAIN}/>
                            </RouterLink>
                        </Box>
                        <StyledLogoItemBox>
                                <Link href='https://uk-ua.facebook.com/' target='_blank' rel="noopener">
                                    <StyledSquareSmall>
                                        <StyledFacebookIcon height='18px' />
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
                        </StyledLogoItemBox>
                    </Stack>
                    <Stack flexDirection='row' alignItems='center'>
                        <StyledHeaderNavLinkBox>
                            <StyledHeaderNavLink to="/">Home</StyledHeaderNavLink>
                            <StyledHeaderNavLink to='/about'>About</StyledHeaderNavLink>
                            <StyledHeaderNavLink to='/myStore'>My Store</StyledHeaderNavLink>
                            {/* <StyledHeaderNavLink to='/articles'>Articles</StyledHeaderNavLink> */}
                            <StyledHeaderNavLink to='/singleArticle'>Articles</StyledHeaderNavLink>
                            <StyledHeaderNavLink to='/contact'>Contact</StyledHeaderNavLink>
                        </StyledHeaderNavLinkBox>
                        <StyledBadge badgeContent={1} color='error'>
                            <ShoppingCartOutlinedIcon sx={{color: WHITE}} />
                        </StyledBadge>
                        <Box ml='30px'>
                            <ButtonAction size="small" width ='160px' height="50px" variant="contained">Order Today</ButtonAction>
                        </Box>
                    </Stack>
                </StyledNav>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled('header')`
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
`;

const StyledNav = styled('nav')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledLogoItemBox = styled(Box)`
    display: flex;
    margin-left: 30px;

    a + a {
        margin-left: 10px;
    }
`;

const StyledHeaderNavLinkBox = styled(Box)`
    a + a {
        margin-left: 30px;
    }
`;

const StyledHeaderNavLink = styled(RouterLink)`
    font-family: Inter, sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 170%;
    letter-spacing: -0.01em;
    text-decoration: none;
    color: ${WHITE};
    
    & > a + a {
        margin-left: 10px;
    }

    &:hover, &:active {
        color: ${SECONDARY};
    }
`;

const StyledBadge = styled(Badge)`
    margin-Left: 30px;

    & .MuiBadge-badge {
        color: ${MAIN};
        background-color: ${SECONDARY};
        font-family: Inter, sans-serif;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
    }
`;

const StyledSquareSmall = styled(SquareSmall)`

    &:hover * {
        fill: ${SECONDARY};
    }
`;

const StyledFacebookIcon = styled(FacebookIcon)`
    fill: ${MAIN};
`;

const StyledTwitterIcon = styled(TwitterIcon)`
    fill: ${MAIN};
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
    fill: ${MAIN};
`;

