import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import amazenCorp from './assets/amazenCorp.png'
import meganBooks from './assets/meganBooks.png'
import losBooks from './assets/losBooks.png'
import urbanLib from './assets/UrbanLib.png'
import { WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH5, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';

export const TrustedBy = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Trusted by the Best</HeadingH3>
                    <LineLarge sx={{marginTop:'22px'}} />
                    <Grid container marginTop='40px'>
                        <Grid item lg={3} textAlign='center'>
                            <img src={amazenCorp} alt="amazen corp logo" />
                            <HeadingH5 sx={{marginTop: '20px'}}>Amazen Corp</HeadingH5>
                            <Paragraph sx={{marginTop: '10px'}}>A long established fact that a who looking at its layout.</Paragraph>
                        </Grid>
                        <Grid item lg={3} textAlign='center'>
                            <img src={meganBooks} alt="megan books logo" />
                            <HeadingH5 sx={{marginTop: '20px'}}>Megan Books</HeadingH5>
                            <Paragraph sx={{marginTop: '10px'}}>A long established fact that a who looking at its layout.</Paragraph>
                        </Grid>
                        <Grid item lg={3} textAlign='center'>
                            <img src={losBooks} alt="los books logo" />
                            <HeadingH5 sx={{marginTop: '20px'}}>Los Books</HeadingH5>
                            <Paragraph sx={{marginTop: '10px'}}>A long established fact that a who looking at its layout.</Paragraph>
                        </Grid>
                        <Grid item lg={3} textAlign='center'>
                            <img src={urbanLib} alt="urban lib logo" />
                            <HeadingH5 sx={{marginTop: '20px'}}>Urban Lib</HeadingH5>
                            <Paragraph sx={{marginTop: '10px'}}>A long established fact that a who looking at its layout.</Paragraph>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 140px;
    padding-bottom: 140px;
    background-color: ${WHITE};
`;