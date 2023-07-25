//TODO decorate text block by thr vertical lines + grid breakcpoints

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import aboutAuthor from './assets/aboutAuthor.png'
import authorsQrcode from './assets/authorsQrcode.svg'
import { BACKGROUND, MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH2, HeadingH3, HeadingH6, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';

export const About = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={12} alignItems='center'>
                    <Grid item md={6} sm={12}> 
                        <img src={aboutAuthor} style={{width: '100%'}} alt="about author" />
                    </Grid>
                    <Grid item md={6} sm={12}> 
                        <HeadingH3>About Author</HeadingH3>
                        <LineLarge sx={{marginTop:'22px'}} />
                        <Paragraph sx={{marginTop: '22px'}}>All the Lorem generators on the Internet tend to repeated predefined chunks as necessary, making this the first true value generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</Paragraph>
                        <Grid container marginTop='20px'>
                            <Grid item lg={4}>
                                <HeadingH2>02</HeadingH2>
                                <Paragraph>Books Published</Paragraph>
                            </Grid>
                            <Grid item lg={4}>
                                <HeadingH2>4.5</HeadingH2>
                                <Paragraph>User Reviews</Paragraph>
                            </Grid>
                            <Grid item lg={4}>
                                <HeadingH2>04</HeadingH2>
                                <Paragraph>Best Seller Awards</Paragraph>
                            </Grid>
                        </Grid>
                        <StyledGridContainer container>                   
                            <Grid item lg={4.5}>
                                    <StyledStack>
                                            <img src={authorsQrcode} alt="" />
                                    </StyledStack>                                
                            </Grid>
                            <Grid item lg={7.5}>
                                <HeadingH6 sx={{color:SECONDARY}}>John Abraham, Ph.d</HeadingH6>
                                <Box marginTop='10px'>
                                    <a href='mailto:johnabraham@gmail.com'><Paragraph sx={{color: '#B4C7E7'}}>Mail: johnabraham@gmail.com</Paragraph></a>
                                    <a href='tel: +21235459000'><Paragraph sx={{color: '#B4C7E7'}}>Phone: (+2) 123 545 9000</Paragraph> </a>
                                </Box>
                            </Grid>   
                        </StyledGridContainer>
                    </Grid>
                </Grid>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 150px;
    padding-bottom: 150px;
    background-color: ${BACKGROUND};
`;

const StyledGridContainer = styled(Grid)`
    width: 477px;
    height: 160px;
    margin-top: 40px;
    padding: 15px;
    align-items: center;
    background-color: ${MAIN};
`;

const StyledStack = styled(Stack)`
    width: 130px;
    height: 130px;
    justify-content: center;
    align-items: center;
    background-color: ${WHITE};
`;