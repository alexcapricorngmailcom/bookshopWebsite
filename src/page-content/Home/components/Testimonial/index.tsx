import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import testimonialUser1 from './assets/testimonialUser1.png'
import testimonialUser2 from './assets/testimonialUser2.png'
import testimonialUser3 from './assets/testimonialUser3.png'
import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH6, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { TestimonialArticle } from './components'

// TODO What a hell is going on with HeadingH6

export const Testimonial = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item lg={3.5}>
                            <HeadingH3>What Readers Say About the Book</HeadingH3>
                            <LineLarge sx={{mt:'25px'}} />
                            <Paragraph sx={{mt:'25px'}}>If you are going to use a passage of Lorem, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem generators.</Paragraph>
                            <Stack spacing={1} flexDirection='row' alignItems='center' mt='50px'>
                                <Rating
                                    icon={<CircleIcon fontSize="inherit" sx={{color: SECONDARY}} />} 
                                    emptyIcon={<CircleOutlinedIcon fontSize="inherit" sx={{color: SECONDARY}} />} 
                                    name="half-rating"                                    
                                    value={4.5} 
                                    precision={0.5} 
                                    readOnly 
                                />
                                <HeadingH6 sx={{mt:'0px !important', ml:'10px !important'}}>(4.8/5)</HeadingH6>
                            </Stack>
                            <Paragraph sx={{mt:'10px', color: MAIN}}>Overall Customer Ratings</Paragraph>
                        </Grid>
                        <Grid item lg={7.5} margin='-15px'>
                            <Stack flexDirection='row' alignItems='center' width='100%'>
                                <Stack justifyContent='space-between' width='50%'>
                                        <Box padding='15px'>
                                            <TestimonialArticle 
                                                img={testimonialUser1}
                                                alt='testimonial user 1'
                                                userName='Martin Philips'
                                                title='“ Awesome Impact ”'
                                                paragraph='All the Lorem generators on the Internet tend to repeat willings predefined chunks value.'
                                            />
                                        </Box>
                                        <Box padding='15px'>
                                            <TestimonialArticle 
                                                    img={testimonialUser2}
                                                    alt='testimonial user 2'
                                                    userName='James Anderson'
                                                    title='“ Mind Blowing Words ”'
                                                    paragraph='All the Lorem generators on the Internet tend to repeat willings predefined chunks value.'
                                                />
                                            </Box>
                                </Stack>
                                <Box width='50%'>
                                    <Box padding='15px'>
                                        <TestimonialArticle 
                                            img={testimonialUser3}
                                            alt='testimonial user 3'
                                            userName='Christina Louis'
                                            title='“ Great Books Collections ”'
                                            paragraph='All the Lorem generators on the Internet tend to repeat willings predefined chunks value.'
                                        />
                                    </Box> 
                                </Box>
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