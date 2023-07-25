import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import amazenCorp from './assets/amazenCorp.png'
import meganBooks from './assets/meganBooks.png'
import losBooks from './assets/losBooks.png'
import urbanLib from './assets/urbanLib.png'
import { WHITE } from '../../../../design-system/colors';
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { TrustedByGridItem } from './components/TrustedByGridItem';

export const TrustedBy = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Trusted by the Best</HeadingH3>
                    <LineLarge sx={{marginTop:'22px'}} />
                    <Grid container marginTop='0px' spacing={5}>
                        <TrustedByGridItem 
                            imgName={amazenCorp} 
                            alt='amazen corp logo' 
                            title='Amazen Corp'
                            paragraph='A long established fact that a who looking at its layout.'
                        />
                        <TrustedByGridItem 
                            imgName={meganBooks} 
                            alt='megan books logo' 
                            title='Megan Books' 
                            paragraph='A long established fact that a who looking at its layout.'
                        />
                        <TrustedByGridItem 
                            imgName={losBooks} 
                            alt='los books logo' 
                            title='Los Books' 
                            paragraph='A long established fact that a who looking at its layout.'
                        />
                        <TrustedByGridItem 
                            imgName={urbanLib} 
                            alt='urban lib logo'
                            title='Urban Lib'
                            paragraph='A long established fact that a who looking at its layout.'
                        />
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