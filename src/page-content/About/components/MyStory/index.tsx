import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import myStory from './assets/myStory.png'
import { WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH5, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { SquareMedium } from '../../../../design-system/geometry/squares';

export const MyStory = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledGridContainer container spacing={{ lg: 12, md: 0, sm: 0, xs: 0 }} alignItems='center'>
                    <StyledGridItem1 item lg={6} md={12} sm={12} xs={12}> 
                        <HeadingH3>My Story</HeadingH3>
                        <LineLarge sx={{mt:'22px'}} />
                        <StyledParagraph sx={{mt:'22px', textAlign:'justify'}}>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</StyledParagraph>
                        <Stack sx={{mt:'40px'}}>
                            <Stack flexDirection='row'>
                                <StyledBox>
                                    <SquareMedium>
                                        <HeadingH5>01</HeadingH5>
                                    </SquareMedium>
                                </StyledBox>
                                <Box>
                                    <HeadingH5 sx={{lineHeight:'95%'}}>Great Author Awards - 1996 & 2000</HeadingH5>
                                    <Paragraph sx={{mt:'17px', textAlign:'justify'}}>How to navigate around the interface and toggle on/off the panels you wish to use.</Paragraph>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt:'35px'}}>
                                <StyledBox>
                                    <SquareMedium>
                                        <HeadingH5>02</HeadingH5>
                                    </SquareMedium>
                                </StyledBox>
                                <Box>
                                    <HeadingH5 sx={{lineHeight:'95%'}}>10 times NYT &#174; Best Seller</HeadingH5>
                                    <Paragraph sx={{mt:'17px', textAlign:'justify'}}>How to navigate around the interface and toggle on/off the panels you wish to use.</Paragraph>
                                </Box>
                            </Stack>
                            <Stack flexDirection='row' sx={{mt:'35px'}}>
                                <StyledBox>
                                    <SquareMedium>
                                        <HeadingH5>03</HeadingH5>
                                    </SquareMedium>
                                </StyledBox>
                                <Box>
                                    <HeadingH5 sx={{lineHeight:'95%'}}>Writer of Hack Productivity</HeadingH5>
                                    <Paragraph sx={{mt:'17px', textAlign:'justify'}}>How to navigate around the interface and toggle on/off the panels you wish to use.</Paragraph>
                                </Box>
                            </Stack>
                        </Stack>
                    </StyledGridItem1>
                    <StyledGridItem2 item lg={6} md={12} sm={12} xs={12}>
                        <StyledImageBox sx={{filter: 'drop-shadow(0 35px 45px rgba(4, 11, 20, 0.15))'}}>
                            <img src={myStory} style={{width: '100%', height: '100%'}} alt="about author" />
                        </StyledImageBox>
                    </StyledGridItem2>
                </StyledGridContainer>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledImageBox = styled(Box)`
    @media (max-width: 1199px) {
        max-width: 520px;
    }
`;

const StyledGridContainer = styled(Grid)`
    @media (max-width: 1199px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const StyledGridItem1 = styled(Grid)`
    @media (max-width: 1199px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const StyledGridItem2 = styled(Grid)`
    @media (max-width: 1199px) {
        margin-top: 80px;
    }

    @media (max-width: 1199px) {
        margin-top: 50px;
    }
`;

const StyledParagraph = styled(Paragraph)`
    @media (max-width: 1199px) {
        text-align: center;
    }
`;

const StyledBox = styled(Box)`
    padding: 0px 35px;
    
    @media (max-width: 449px) {
        padding-left: 0px; 
    }
`;
