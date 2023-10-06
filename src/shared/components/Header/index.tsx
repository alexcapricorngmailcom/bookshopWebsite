import { styled } from "@mui/material/styles";
import { NavLink, Link as RouterLink } from 'react-router-dom'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';

import { ReactComponent as PagesIcon } from '../../../shared/assets/icons/PagesIcon.svg'
import { ReactComponent as FacebookIcon } from '../../../shared/assets/icons/FacebookIcon.svg'
import { ReactComponent as TwitterIcon } from '../../../shared/assets/icons/TwitterIcon.svg'
import { ReactComponent as LinkedInIcon } from '../../../shared/assets/icons/LinkedInIcon.svg'
import { MAIN, SECONDARY, WHITE } from '../../../design-system/colors';
import { ButtonAction } from "../../../design-system/Button";
import { SquareSmall } from "../../../design-system/geometry/squares";
import CartScrollDialog from "./components/CartScrollDialog";
import { ScrollToTopLocal } from "../ScrollToTopLocal";

const setActive = ({ isActive }:any) => {
    return {
        color: isActive ? SECONDARY : WHITE,
    };
};

export const Header = () => {
    return(
        <StyledHeader>
            <Container maxWidth='lg'>
                <StyledNav>
                    <Stack flexDirection='row' alignItems='center'>
                        <Box>
                            <RouterLink to='/' onClick={ScrollToTopLocal}>
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
                        <StyledLabel htmlFor="navToogler"><MenuIcon fontSize="large" /></StyledLabel>
                        <StyledInput type="checkbox" id="navToogler" />
                        <StyledHeaderNavLinkLabel htmlFor="navToogler">
                            <StyledNavLink
                                to="/"
                                style={setActive}
                                onClick={ScrollToTopLocal}
                            >
                            Home
                            </StyledNavLink>
                            <StyledNavLink
                                to="/about"
                                style={setActive}
                            >
                            About
                            </StyledNavLink>
                            <StyledNavLink
                                to="/myStore"
                                style={setActive}
                            >
                            My Store
                            </StyledNavLink>
                            <StyledNavLink
                                to="/articles"
                                style={setActive}
                            >
                            Articles
                            </StyledNavLink>
                            <StyledNavLink
                                to="/contact"
                                style={setActive}
                            >
                            Contact
                            </StyledNavLink>
                        </StyledHeaderNavLinkLabel>
                        <CartScrollDialog />
                        <StyledBox ml='30px'>
                            <ButtonAction size="small" width ='160px' height="50px" variant="contained" component={RouterLink} to='/myStore'>Order Today</ButtonAction>
                        </StyledBox>
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

    @media (max-width: 1199px) {
        margin-left: 24px;
    }

    @media (max-width: 599px) {
        margin-left: 16px;
    }

    @media (max-width: 499px) {
        display: none;
    }
`;

const StyledLabel = styled('label')`
    display: none;
    cursor: pointer;
    color: ${WHITE};
    height: 35px;
    margin-top: 1px;
    margin-left: 25px; 
    order: 3;

    &:hover {
        color: ${SECONDARY};
    }

    @media (max-width: 899px) { 
        display: block;
    }
`;

const StyledInput = styled('input')`
    display: none;

    &:checked + label {
        display: flex;
    }
`;

const StyledHeaderNavLinkLabel = styled('label')`
    a + a {
        margin-left: 30px;
    }

    & > a:hover {
        color: ${SECONDARY} !important;
    }

    @media (max-width: 1199px) { 
        a + a {
            margin-left: 25px;
        }
    }

    @media (max-width: 899px) { 
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        z-index: 100;

        background-color: rgba(27, 55, 100, 0.9);
        
        a + a {
            margin-left: 0px;
            margin-top: 20px;
        }
    }
`;

const StyledNavLink = styled(NavLink)`
    font-family: Inter, sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 170%;
    letter-spacing: -0.01em;
    text-decoration: none;

    @media (max-width: 899px) { 
        font-size: 30px;
        padding: 15px;
        text-transform: uppercase;
    }
`;

const StyledSquareSmall = styled(SquareSmall)`
    &:hover * {
        fill: ${SECONDARY};
    }

    @media (max-width: 949px) { 
        width: 40px;
        height: 40px;
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

const StyledBox = styled(Box)`
    @media (max-width: 1199px) { 
        display: none;
    }
`;

