import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import calloutImg from './assets/calloutImg.png'
import { ButtonAction } from '../../../../design-system/Button';
import { MAIN, PARAGRAPH_SECONDARY, WHITE } from '../../../../design-system/colors'
import { HeadingH3, Paragraph } from '../../../../design-system/typography'
import { LineLarge } from '../../../../design-system/geometry/lines'

export const Callout = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={12} alignItems='center'>
                    <Grid item md={6} sm={12}>
                        <HeadingH3 sx={{color: WHITE}}>Get Book Copy Today!</HeadingH3>
                        <LineLarge sx={{mt:'20px'}} />
                        <Paragraph sx={{mt:'20px', color: PARAGRAPH_SECONDARY}}>There are many variations of passages of Lorem available, but the majority have suffered alteration in some form.</Paragraph>
                        <Box mt='30px'>
                            <ButtonAction>Order Today</ButtonAction> 
                            {/* <ButtonAction size={'small'} outlined onClick={() =>{}}>Order Today</ButtonAction> */}
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <img src={calloutImg} style={{width:'100%', height:'100%'}} alt="callout image" />
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