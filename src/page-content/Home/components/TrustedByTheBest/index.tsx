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

export const TrustedByTheBest = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3 sx={{textAlign:'center'}}>Trusted by the Best</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <Grid container spacing={5} mt='0px'>
                        <TrustedByGridItem 
                            img={amazenCorp} 
                            alt='amazen corp logo' 
                            title='Amazen Corp'
                            paragraph='A long established fact that a who looking at its layout.'
                        />
                        <TrustedByGridItem 
                            img={meganBooks} 
                            alt='megan books logo' 
                            title='Megan Books' 
                            paragraph='A long established fact that a who looking at its layout.'
                        />
                        <TrustedByGridItem 
                            img={losBooks} 
                            alt='los books logo' 
                            title='Los Books' 
                            paragraph='A long established fact that a who looking at its layout.'
                        />
                        <TrustedByGridItem 
                            img={urbanLib} 
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
    padding: 145px 0px;
    background-color: ${WHITE};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;