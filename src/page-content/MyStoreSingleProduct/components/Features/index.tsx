import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

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
                <Grid container spacing={11}>
                    <Grid item md={4}>
                        <Stack alignItems='center' textAlign='center'>
                            <SquareLarge sx={{backgroundColor: MAIN}}>
                                <ShieldIcon stroke={WHITE} width='36px' height='36px' />
                            </SquareLarge> 
                            <HeadingH4 sx={{mt:'20px'}}>Secure Payments</HeadingH4>
                            <Paragraph sx={{mt:'20px', color: MAIN}}>There are many variations of passages of alteration in some form.</Paragraph>
                        </Stack>
                    </Grid>
                    <Grid item md={4}>
                        <Stack alignItems='center' textAlign='center'>
                            <SquareLarge sx={{backgroundColor: MAIN}}>
                                <CubeIcon stroke={WHITE} width='36px' height='36px' />
                            </SquareLarge>
                            <HeadingH4 sx={{mt:'20px'}}>Free Shipping</HeadingH4>
                            <Paragraph sx={{mt:'20px', color: MAIN}}>There are many variations of passages of alteration in some form.</Paragraph>
                        </Stack>
                    </Grid>
                    <Grid item md={4} textAlign='center'>
                        <Stack alignItems='center' textAlign='center'>
                            <SquareLarge sx={{backgroundColor: MAIN}}>
                                <LightningIcon stroke={WHITE} width='36px' height='36px' />
                            </SquareLarge>
                            <HeadingH4 sx={{mt:'20px'}}>100% Satisfactions</HeadingH4>
                            <Paragraph sx={{mt:'20px', color: MAIN}}>There are many variations of passages of alteration in some form.</Paragraph>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding: 85px 0px;
    background-color: ${SECONDARY};
`;