import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import aboutAuthor from './assets/aboutAuthor.png'
import authorsQrcode from './assets/authorsQrcode.svg'
import { BACKGROUND, MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH2, HeadingH3, HeadingH6, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { Stack } from '@mui/material';
import { Padding } from '@mui/icons-material';
import { relative } from 'path';

export const About = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={12} alignItems='center'>
                    <Grid item lg={6}> 
                        <img src={aboutAuthor} style={{width: '100%'}} alt="about author" />
                    </Grid>
                    <Grid item lg={6}> 
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
                        <Grid container sx={{
                            width: '477px',
                            height: '160px',
                            marginTop: '40px',
                            padding: '15px',
                            alignItems: 'center',
                            backgroundColor: MAIN
                        }}>                   
                            <Grid item lg={4.5}>
                                    <Box sx={{
                                        width: '130px',
                                        height: '130px',
                                        position: 'relative',
                                        backgroundColor: WHITE
                                    }}>
                                        <Box sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)'
                                        }}>
                                            <img src={authorsQrcode} alt="" />
                                        </Box>
                                    </Box>                                
                            </Grid>
                            <Grid item lg={7.5}>
                                <HeadingH6 sx={{color:SECONDARY}}>John Abraham, Ph.d</HeadingH6>
                                <Box marginTop='10px'>
                                    <a href='mailto:johnabraham@gmail.com'><Paragraph sx={{color: '#B4C7E7'}}>Mail: johnabraham@gmail.com</Paragraph></a>
                                    <a href='tel: +21235459000'><Paragraph sx={{color: '#B4C7E7'}}>Phone: (+2) 123 545 9000</Paragraph> </a>
                                </Box>
                            </Grid>   
                        </Grid>
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

//TODO decorate text block by thr vertical lines + grid breakcpoints