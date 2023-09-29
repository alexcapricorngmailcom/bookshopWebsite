import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import whatReadersSayUser1 from './assets/whatReadersSayUser1.png'
import whatReadersSayUser2 from './assets/whatReadersSayUser2.png'
import whatReadersSayUser3 from './assets/whatReadersSayUser3.png'
import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH3, HeadingH6, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { WhatReadersSayArticle } from './components/WhatReadersSayArticle';


// TODO What a hell is going on with HeadingH6

export const WhatReadersSay = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <StyledGridItem1 item lg={3.5}>
                            <HeadingH3>What Readers Say About the Book</HeadingH3>
                            <LineLarge sx={{mt:'25px'}} />
                            <StyledParagraph>If you are going to use a passage of Lorem, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem generators.</StyledParagraph>
                            <SlyledRatingStack spacing={1}>
                                <Rating
                                    icon={<CircleIcon fontSize="inherit" sx={{color: SECONDARY}} />} 
                                    emptyIcon={<CircleOutlinedIcon fontSize="inherit" sx={{color: SECONDARY}} />} 
                                    name="half-rating"                                    
                                    value={4.5} 
                                    precision={0.5} 
                                    readOnly 
                                />
                                <HeadingH6 sx={{mt:'0px !important', ml:'10px !important'}}>(4.8/5)</HeadingH6>
                            </SlyledRatingStack>
                            <Paragraph sx={{mt:'10px', color: MAIN}}>Overall Customer Ratings</Paragraph>
                        </StyledGridItem1>
                        <StyledGridItem2 item lg={7.5} margin='-15px'>
                            <Stack flexDirection='row' alignItems='center' width='100%'>
                                <Stack justifyContent='space-between' width='50%'>
                                        <Box padding='15px'>
                                            <WhatReadersSayArticle
                                                img={whatReadersSayUser1}
                                                alt='testimonial user 1'
                                                userName='Martin Philips'
                                                title='“Awesome Impact”'
                                                paragraph='All the Lorem generators on the Internet tend to repeat willings predefined chunks value.'
                                            />
                                        </Box>
                                        <Box padding='15px'>
                                            <WhatReadersSayArticle 
                                                    img={whatReadersSayUser2}
                                                    alt='testimonial user 2'
                                                    userName='James Anderson'
                                                    title='“Mind Blowing Words”'
                                                    paragraph='All the Lorem generators on the Internet tend to repeat willings predefined chunks value.'
                                                />
                                            </Box>
                                </Stack>
                                <Box width='50%'>
                                    <Box padding='15px'>
                                        <WhatReadersSayArticle 
                                            img={whatReadersSayUser3}
                                            alt='testimonial user 3'
                                            userName='Christina Louis'
                                            title='“Great Books Collections”'
                                            paragraph='All the Lorem generators on the Internet tend to repeat willings predefined chunks value.'
                                        />
                                    </Box> 
                                </Box>
                            </Stack>
                        </StyledGridItem2>
                    </Grid>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};
`;

const StyledGridItem1 = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledParagraph = styled(Paragraph)`
    margin-top: 25px;
    text-align: justify;

    @media (max-width: 1199px) {
        text-align: center;
    }
`;

const SlyledRatingStack = styled(Stack)`
    flex-direction: row;
    align-items: center;
    margin-top: 50px;

    @media (max-width: 1199px) {
        margin-top: 20px;
    }
`;

const StyledGridItem2 = styled(Grid)`
    margin: 10px;
`;


