import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import calloutImg from './assets/calloutImg.png'
import { ButtonAction } from '../../../../design-system/Button';
import { MAIN, WHITE } from '../../../../design-system/colors'
import { HeadingH3, Paragraph } from '../../../../design-system/typography'
import { LineLarge } from '../../../../design-system/geometry/lines'

export const Callout = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={12} alignItems='center'>
                    <Grid item md={6} sm={12}>
                        <HeadingH3 sx={{color: WHITE}}>Get Book Copy Today!</HeadingH3>
                        <LineLarge sx={{marginTop: '20px'}} />
                        <Paragraph sx={{marginTop: '20px', color: '#B4C7E7'}}>There are many variations of passages of Lorem available, but the majority have suffered alteration in some form.</Paragraph>
                        <Box marginTop='30px'>
                            <ButtonAction>Order Today</ButtonAction> 
                            {/* <ButtonAction size={'small'} outlined onClick={() =>{}}>Order Today</ButtonAction> */}
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <img src={calloutImg} style={{width: '100%'}} alt="callout image" />
                    </Grid>
                </Grid>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: ${MAIN};
`;