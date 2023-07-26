import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import { WHITE } from '../../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';

export const Testimonial = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                    <Grid container spacing={6}>
                        <Grid item lg={4}>
                            <HeadingH3>What Readers Say About the Book</HeadingH3>
                            <LineLarge sx={{mt:'25px'}} />
                            <Paragraph sx={{mt:'25px'}}>If you are going to use a passage of Lorem, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem generators.</Paragraph>
                            <Stack spacing={1}>
                                <Rating
                                    icon={<CircleIcon fontSize="inherit" />} 
                                    emptyIcon={<CircleOutlinedIcon fontSize="inherit" />} 
                                    name="half-rating"                                    
                                    defaultValue={4.5} 
                                    precision={0.5} 
                                    readOnly />
                            </Stack>
                        </Grid>
                        <Grid item lg={7}>
                            <Stack flexDirection='row' alignItems='center' width='100%'>
                                <Stack width='50%' justifyContent='space-between'>
                                    <Box>1</Box>
                                    <Box>2</Box>
                                </Stack>
                                <Box width='50%'>3</Box>
                            </Stack>
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