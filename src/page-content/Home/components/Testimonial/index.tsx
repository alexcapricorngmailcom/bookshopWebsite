import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { WHITE } from '../../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';


export const Testimonial = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item lg={4}>
                            <HeadingH3>What Readers Say About the Book</HeadingH3>
                            <LineLarge sx={{mt:'25px'}} />
                            <Paragraph sx={{mt:'25px'}}>If you are going to use a passage of Lorem, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem generators.</Paragraph>
                        </Grid>
                        <Grid item lg={7}>
                        </Grid>
                    </Grid>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
`;