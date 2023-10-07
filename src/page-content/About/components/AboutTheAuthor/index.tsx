import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { ReactComponent as FacebookIcon } from '../../../../shared/assets/icons/FacebookIcon.svg'
import { ReactComponent as TwitterIcon } from '../../../../shared/assets/icons/TwitterIcon.svg'
import { ReactComponent as LinkedInIcon } from '../../../../shared/assets/icons/LinkedInIcon.svg'
import aboutTheAuthor from './assets/aboutTheAuthor.png'
import { MAIN, SECONDARY, BACKGROUND, WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH5, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { ButtonAction } from '../../../../design-system/Button';

export const AboutTheAuthor = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack>
                    <Box sx={{filter: 'drop-shadow(0 35px 45px rgba(4, 11, 20, 0.15))'}}>
                        <img src={aboutTheAuthor} style={{width: '100%', height: '100%'}} alt="about the author" />
                    </Box>
    
                    <StyledGridContainer container spacing={10} alignItems='center' sx={{mt:'0px'}}>
                        <StyledGridItem1 item lg={5.5} md={12} sm={12} order={{ lg: 1, md: 2, sm: 2, xs: 2 }}>
                            <StyledBackgroundBox>
                                <Stack flexDirection='row' justifyContent='space-between'>
                                    <StyledBox>
                                        <HeadingH5>Country :</HeadingH5>
                                        <HeadingH5>Language :</HeadingH5>
                                        <HeadingH5>Genre :</HeadingH5>
                                        <HeadingH5>Publication date :</HeadingH5>
                                        <HeadingH5>Share us on :</HeadingH5>
                                    </StyledBox>
                                    <StyledBox>
                                        <Paragraph>United Kingdom</Paragraph>
                                        <Paragraph>English</Paragraph>
                                        <Paragraph>Historiography</Paragraph>
                                        <Paragraph>1991</Paragraph>

                                        <StyledBoxIcons>
                                            <StyledLink href='https://uk-ua.facebook.com/' target='_blank' rel="noopener">
                                                <StyledFacebookIcon />
                                            </StyledLink>
                                            <StyledLink href='https://twitter.com/' target='_blank' rel="noopener">
                                                <StyledTwitterIcon />
                                            </StyledLink>
                                            <StyledLink href='https://ua.linkedin.com/' target='_blank' rel="noopener">
                                                <StyledLinkedInIcon />
                                            </StyledLink>
                                        </StyledBoxIcons>
                                    </StyledBox>
                                </Stack>
                            </StyledBackgroundBox>
                        </StyledGridItem1>
                        <StyledGridItem2 item lg={6.5} md={12} sm={12} order={{ lg: 2, md: 1, sm: 1, xs: 1 }}>
                            <StyledHeadingH3>About Dr. John Abraham</StyledHeadingH3>
                            <LineLarge sx={{mt:'22px'}} />
                            <StyledParagraph sx={{mt:'22px', textAlign:'justify'}}>All the Lorem generators tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, that can combined with a handful of model sentence structures.</StyledParagraph>
                            <Box sx={{mt:'30px'}}>
                                <ButtonAction size='large' component={RouterLink} to='/contact' >Contact now</ButtonAction>
                            </Box>
                        </StyledGridItem2>
                    </StyledGridContainer>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${BACKGROUND};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledBackgroundBox = styled(Grid)`
    padding: 65px 50px;
    border: 2px solid #DFE9F8;
    background-color: ${WHITE};
    
    @media (max-width: 499px) {
        padding: 65px 40px;
    }
    @media (max-width: 449px) {
        padding: 20px;
    }
`;

const StyledBox = styled(Box)`
    h5 + h5, p + p {
        margin-top: 20px;
    }
`;

const StyledBoxIcons = styled(Box)`
    flex-direction: row;
    margin-top: 20px;
    margin-left: -10px;
    
    a + a {
        margin-left: 15px;
    }
`;

const StyledLink = styled(Link)`
    padding: 10px;

    &:hover * {
    fill: ${SECONDARY};
}
`;

const StyledGridContainer = styled(Grid)`
    @media (max-width: 1199px) {
        display: flex;
        flex-direction: column;
    }
`;

const StyledGridItem1 = styled(Grid)`
    @media (max-width: 1199px) {
        width: 564px;
    }
    @media (max-width: 599px) {
        width: 100%;
    }
`;

const StyledGridItem2 = styled(Grid)`
    @media (max-width: 1199px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const StyledHeadingH3 = styled(HeadingH3)`
    @media (max-width: 1199px) {
        text-align: center;
    }
`;

const StyledParagraph = styled(Paragraph)`
    @media (max-width: 1199px) {
        text-align: center;
    }
`;

const StyledFacebookIcon = styled(FacebookIcon)`
    fill: ${MAIN};
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