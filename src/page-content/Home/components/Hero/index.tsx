import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import theDarkLightLarge from '../../../../shared/assets//img/theDarkLightLarge.png';
import { MAIN, PARAGRAPH_SECONDARY, WHITE } from '../../../../design-system/colors'
import { HeadingH1, HeadingH5, Paragraph } from '../../../../design-system/typography'
import { LineSmall } from '../../../../design-system/geometry/lines'
import { BookDetails } from '../../../../shared/components/BookDetails';
import { ButtonAction } from '../../../../design-system/Button';

export const Hero = ({scrollOnClick}:{scrollOnClick: () => void}) => {

    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={12} alignItems='center'>
                    <Grid item md={6} sm={12}>
                        <Stack flexDirection='row' alignItems='center'>
                            <LineSmall />
                            <HeadingH5 sx={{ml:'15px', color: WHITE}}>Welcome to Pages</HeadingH5>
                        </Stack>
                        <HeadingH1 sx={{mt:'16px', lineHeight: '110%', color: WHITE}}>Books are uniquely portable magic</HeadingH1>
                        <Paragraph sx={{mt:'32px', color: PARAGRAPH_SECONDARY}}>There are many variations of passages of Lorem available, but the majority have suffered alteration in some form.</Paragraph>
                        <Stack flexDirection='row' alignItems='center' mt='50px'>
                            <ButtonAction component={Link} to='/myStore'>Order Today</ButtonAction> 
                            <ButtonAction variant='text' onClick={scrollOnClick}><Box sx={{textDecorationLine:'underline', textUnderlineOffset: '7px'}}>Read Free Demo</Box></ButtonAction>
                        </Stack>
                        <Grid container marginTop='50px'>
                            <Grid item md={3.5} sm={3.5}>
                                <BookDetails
                                    title='Pages:'
                                    paragraph='586 pages'
                                    color={WHITE}
                                />
                            </Grid>
                            <Grid item md={3.5} sm={3.5}>
                                <BookDetails 
                                    title='Length:'
                                    paragraph='10 hours'
                                    color={WHITE}
                                />
                            </Grid>
                            <Grid item md={5} sm={5}>
                                <BookDetails 
                                    title='Ratings:'
                                    paragraph='4.5/5 (305 ratings)'
                                    color={WHITE}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <img src={theDarkLightLarge} style={{width: '100%', height: '100%'}} alt="the dark light book cover" />
                    </Grid>
                </Grid>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding-top: 185px;
    padding-bottom: 125px;
    background-color: ${MAIN};
`;