import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import aboutAuthor from './assets/aboutAuthor.png'
import authorsQrcode from './assets/authorsQrcode.svg'
import { MAIN, SECONDARY, BACKGROUND, PARAGRAPH_SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH2, HeadingH3, HeadingH6, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';

export const AboutAuthor = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={{ lg: 12, md: 0, sm: 0, xs: 0 }} alignItems='center'>
                    <StyledGridItem1 item lg={6} md={12} sm={12} xs={12}>
                        <StyledMainImageBox>
                            <img src={aboutAuthor} style={{width: '100%', height: '100%'}} alt="about author" />
                        </StyledMainImageBox>
                    </StyledGridItem1>
                    <StyledGridItem2 item lg={6} md={12} sm={12} xs={12}> 
                        <HeadingH3>About Author</HeadingH3>
                        <LineLarge sx={{mt:'22px'}} />
                        <StyledParagraph sx={{mt: '22px', textAlign:'justify'}}>All the Lorem generators on the Internet tend to repeated predefined chunks as necessary, making this the first true value generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</StyledParagraph>
                        <Grid container mt='20px'>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <HeadingH2>02</HeadingH2>
                                <Paragraph>Books Published</Paragraph>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <HeadingH2>4.5</HeadingH2>
                                <Paragraph>User Reviews</Paragraph>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <HeadingH2>04</HeadingH2>
                                <Paragraph>Best Seller Awards</Paragraph>
                            </Grid>
                        </Grid>
                        <StyledStackContainer>                   
                            <StyledBoxImage>
                                <img src={authorsQrcode} style={{width: '100%', height: '100%'}} alt="author's qr code" />
                            </StyledBoxImage>                                
                            <StyledStackItem>
                                <HeadingH6 sx={{color:SECONDARY}}>John Abraham, Ph.d</HeadingH6>
                                <Stack mt='10px'>
                                    <StyledLink href="mailto:johnabraham@gmail.com">Mail: johnabraham@gmail.com</StyledLink>
                                    <StyledLink href="tel: +21235459000">Phone: (+2) 123 545 9000</StyledLink>
                                </Stack>
                            </StyledStackItem>   
                        </StyledStackContainer>
                    </StyledGridItem2>
                </Grid>
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

const StyledGridItem1 = styled(Grid)`
    @media (max-width: 1199px) {
        order: 1;
        margin-top: 80px;
    }
`;

const StyledGridItem2 = styled(Grid)`

    @media (max-width: 1199px) {
        order: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const StyledParagraph = styled(Paragraph)`
    text-align: justify;

    @media (max-width: 1199px) {
        text-align: center;
    }
`;

const StyledMainImageBox = styled(Box)`
    @media (max-width: 1199px) {
        max-width: 540px;
        margin: 0 auto;
    }
`;

const StyledStackContainer = styled(Stack)`
    flex-direction: row;
    align-items: center;
    width: 477px;
    height: 160px;
    margin-top: 40px;
    padding: 15px;
    background-color: ${MAIN};
    
    @media (max-width: 599px) {
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
`;

const StyledStackItem = styled(Stack)`
    margin-left: 33px;
    
    @media (max-width: 599px) {
        margin-top: 15px;
        margin-left: 0px;
    }
`;

const StyledBoxImage = styled(Box)`
    width: 130px;
    height: 130px;
    padding: 15px;
    background-color: ${WHITE};
`;

const StyledLink = styled(Link)`
    font-family: Inter, sans-serif;
    font-size: 19px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: -0.01em;
    color: ${PARAGRAPH_SECONDARY};

    &:hover, &:active {
        text-decoration: underline;
    }
`;