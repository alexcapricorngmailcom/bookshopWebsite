import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logoPages from './assets/logoPages.svg'
import logoFacebook from './assets/logoFacebook.svg'
import logoTwitter from './assets/logoTwitter.svg'
import logoLinkedIn from './assets/logoLinkedIn.svg'
import { MAIN, SECONDARY, WHITE } from '../../../design-system/colors';
import { ButtonAction } from "../../../design-system/Button";

export const Header = () => {
    return(
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledNav>
                    <Stack flexDirection='row' alignItems='center'>
                        <Box>
                            <Link href='#'><img src={logoPages} alt="pages logo" /></Link>
                        </Box>
                        <StyledLogoItemBox>
                            <Link href='https://uk-ua.facebook.com/' target='_blank'><img src={logoFacebook} alt="Facebook logo" /></Link>
                            <Link href='https://twitter.com/' target='_blank'><img src={logoTwitter} alt="Twitter logo" /></Link>
                            <Link href='https://ua.linkedin.com/' target='_blank'><img src={logoLinkedIn} alt="LinkedIn logo" /></Link>
                        </StyledLogoItemBox>
                    </Stack>
                    <Stack flexDirection='row' alignItems='center'>
                        <StyledHeaderNavLinkBox>
                            <StyledHeaderNavLink href="#">Home</StyledHeaderNavLink>
                            <StyledHeaderNavLink href="#">Pages</StyledHeaderNavLink>
                            <StyledHeaderNavLink href="#">About</StyledHeaderNavLink>
                            <StyledHeaderNavLink href="#">Contact</StyledHeaderNavLink>
                        </StyledHeaderNavLinkBox>
                        <StyledBadge badgeContent={1} color='error'>
                            <></>
                            <ShoppingCartOutlinedIcon sx={{color: WHITE}} />
                        </StyledBadge>
                        <Box ml='30px'>
                            <ButtonAction>Order Today</ButtonAction>
                        </Box>
                    </Stack>
                </StyledNav>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
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
    margin-left: 30px;

    & > a + a {
        margin-left: 10px;
    }
`;

const StyledHeaderNavLinkBox = styled(Box)`

    & > a + a {
        margin-left: 30px;
    }
`;

const StyledHeaderNavLink = styled(Link)`
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
    }
`;