import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link as RouterLink } from 'react-router-dom'

import { ReactComponent as PagesIcon } from '../../../shared/assets/icons/PagesIcon.svg'
import { ReactComponent as FacebookIcon } from '../../../shared/assets/icons/FacebookIcon.svg'
import { ReactComponent as TwitterIcon } from '../../../shared/assets/icons/TwitterIcon.svg'
import { ReactComponent as LinkedInIcon } from '../../../shared/assets/icons/LinkedInIcon.svg'
import { MAIN, SECONDARY, WHITE } from '../../../design-system/colors';
import { ButtonAction } from "../../../design-system/Button";
import { SquareMedium } from "../../../design-system/geometry/squares";

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
                                    <SquareMedium>
                                        <StyledFacebookIcon />
                                    </SquareMedium>
                                </Link>
                                <Link href='https://twitter.com/' target='_blank' rel="noopener">
                                    <SquareMedium>
                                        <StyledTwitterIcon />
                                    </SquareMedium>
                                </Link>
                                <Link href='https://ua.linkedin.com/' target='_blank' rel="noopener">
                                    <SquareMedium>
                                        <StyledLinkedInIcon />
                                    </SquareMedium>
                                </Link>
                        </StyledLogoItemBox>
                    </Stack>
                    <Stack flexDirection='row' alignItems='center'>
                        <StyledHeaderNavLinkBox>
                            <StyledHeaderNavLink to="/">Home</StyledHeaderNavLink>
                            <StyledHeaderNavLink to='/pages'>Pages</StyledHeaderNavLink>
                            <StyledHeaderNavLink to='/about'>About</StyledHeaderNavLink>
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

const StyledFacebookIcon = styled(FacebookIcon)`
    fill: ${MAIN};

    &:hover {
        fill: ${SECONDARY};
    }
`;

const StyledTwitterIcon = styled(TwitterIcon)`
    fill: ${MAIN};

    &:hover {
        fill: ${SECONDARY};
    }
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
    fill: ${MAIN};

    &:hover {
        fill: ${SECONDARY};
    }
`;

