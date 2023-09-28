import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { ReactComponent as ShieldIcon} from './assets/shieldIcon.svg'
import { ReactComponent as CubeIcon} from './assets/cubeIcon.svg'
import { ReactComponent as LightningIcon} from './assets/lightningIcon.svg'
import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors'
import { HeadingH4, Paragraph } from '../../../../design-system/typography'
import { SquareLarge } from '../../../../design-system/geometry/squares';

export const Features = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledGridContainer container spacing={11}>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Stack alignItems='center' textAlign='center'>
                            <SquareLarge sx={{backgroundColor: MAIN}}>
                                <ShieldIcon stroke={WHITE} width='36px' height='36px' />
                            </SquareLarge> 
                            <StyledHeadingH4 sx={{mt:'20px'}}>Secure Payments</StyledHeadingH4>
                            <Paragraph sx={{mt:'20px', color: MAIN}}>There are many variations of passages of alteration in some form.</Paragraph>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Stack alignItems='center' textAlign='center'>
                            <SquareLarge sx={{backgroundColor: MAIN}}>
                                <CubeIcon stroke={WHITE} width='36px' height='36px' />
                            </SquareLarge>
                            <StyledHeadingH4 sx={{mt:'20px'}}>Free Shipping</StyledHeadingH4>
                            <Paragraph sx={{mt:'20px', color: MAIN}}>There are many variations of passages of alteration in some form.</Paragraph>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Stack alignItems='center' textAlign='center'>
                            <SquareLarge sx={{backgroundColor: MAIN}}>
                                <LightningIcon stroke={WHITE} width='36px' height='36px' />
                            </SquareLarge>
                            <StyledHeadingH4 sx={{mt:'20px'}}>100% Satisfactions</StyledHeadingH4>
                            <Paragraph sx={{mt:'20px', color: MAIN}}>There are many variations of passages of alteration in some form.</Paragraph>
                        </Stack>
                    </Grid>
                </StyledGridContainer>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding: 85px 0px;
    background-color: ${SECONDARY};
`;

const StyledGridContainer = styled(Grid)`
    @media (max-width: 899px) {
        display: flex;
        justify-content: center;
    }
`;

const StyledHeadingH4 = styled(HeadingH4)`
    @media (max-width: 624px) {
        font-size: 30px;
    }
    @media (max-width: 599px) {
        font-size: 32px;
    }
`;

