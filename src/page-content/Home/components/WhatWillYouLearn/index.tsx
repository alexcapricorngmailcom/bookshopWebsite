import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import whatWillYouLearnImg from './assets/whatWillYouLearnImg.png'
import { BACKGROUND, WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH5 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { CircleLarge } from '../../../../design-system/geometry/circles';

export const WhatWillYouLearn = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>What will you learn?</HeadingH3>
                    <LineLarge sx={{marginTop:'22px'}} />
                    <Grid container spacing={6} alignItems='center' marginTop='0px'>
                        <Grid item lg={6}>
                            <Grid container rowSpacing={4} columnSpacing={4}>
                                <Grid item lg={6} md={6} sm={6}>
                                    <Box sx={{padding: '40px 30px', backgroundColor: BACKGROUND}}>
                                        <CircleLarge>
                                            <HeadingH5>01</HeadingH5>
                                        </CircleLarge>
                                        <HeadingH5 sx={{marginTop:'30px'}}>Use HDFS & Map Reduce for storing & analyzing data at scale.</HeadingH5>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6}>
                                    <Box sx={{padding: '40px 30px', backgroundColor: BACKGROUND}}>
                                        <CircleLarge>
                                            <HeadingH5>02</HeadingH5>
                                        </CircleLarge>
                                        <HeadingH5 sx={{marginTop:'30px'}}>Use HDFS & Map Reduce for storing & analyzing data at scale.</HeadingH5>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6}>
                                    <Box sx={{padding: '40px 30px', backgroundColor: BACKGROUND}}>
                                        <CircleLarge>
                                            <HeadingH5>03</HeadingH5>
                                        </CircleLarge>
                                        <HeadingH5 sx={{marginTop:'30px'}}>Use HDFS & Map Reduce for storing & analyzing data at scale.</HeadingH5>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6}>
                                    <Box sx={{padding: '40px 30px', backgroundColor: BACKGROUND}}>
                                        <CircleLarge>
                                            <HeadingH5>04</HeadingH5>
                                        </CircleLarge>
                                        <HeadingH5 sx={{marginTop:'30px'}}>Use HDFS & Map Reduce for storing & analyzing data at scale.</HeadingH5>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={6}>
                            <img src={whatWillYouLearnImg} style={{width:'100%'}} alt="what will you learn image" />
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
`;