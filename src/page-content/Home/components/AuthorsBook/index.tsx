import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import atomicOneSmall from './assets/atomicOneSmall.png'
import theDarkLightSmall from './assets/theDarkLightSmall.png'
import { MAIN, WHITE } from '../../../../design-system/colors';
import { HeadingH5, HeadingH3, HeadingH4, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { BookDetails } from '../../../../shared/components/BookDetails';
import { ButtonAction } from '../../../../design-system/Button';

export const AuthorsBook = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Author’s Book Includes</HeadingH3>
                    <LineLarge sx={{marginTop:'22px'}} />
                    <Grid container spacing={6} marginTop='22px'>
                        <Grid item md={6} sm={12}>
                            <Grid container spacing={4} alignItems='center'>
                                <Grid item md={6} sm={6} xs={12}>
                                    <img src={atomicOneSmall} style={{width: '100%'}} alt="atomic one’s book cover" />
                                </Grid>
                                <Grid item md={6} sm={6} xs={12}>
                                    <HeadingH4>Atomic One’s</HeadingH4>
                                    <Paragraph sx={{marginTop: '14px'}}>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</Paragraph>
                                    <Grid container marginTop='30px'>
                                        <Grid item md={6} sm={6}>
                                            <BookDetails
                                                title={'Pages:'}
                                                paragraph={'586pages'}
                                            />
                                        </Grid>
                                        <Grid item md={6} sm={6}>
                                            <BookDetails 
                                                title={'Length:'}
                                                paragraph={'10 Hours'}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box marginTop='30px'>
                                        <ButtonAction size={'small'} outlined onClick={() =>{}}>Order Today</ButtonAction>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <Grid container spacing={4} alignItems='center'>
                                <Grid item md={6} sm={6} xs={12}>
                                    <img src={theDarkLightSmall} style={{width: '100%'}} alt="the dark light book cover" />
                                </Grid>
                                <Grid item md={6} sm={6} xs={12}>
                                    <HeadingH4>The Dark Light</HeadingH4>
                                    <Paragraph sx={{marginTop: '14px'}}>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</Paragraph>
                                    <Grid container marginTop='30px'>
                                        <Grid item md={6} sm={6}>
                                            <BookDetails
                                                title={'Pages:'}
                                                paragraph={'586pages'}
                                            />
                                        </Grid>
                                        <Grid item md={6} sm={6}>
                                            <BookDetails 
                                                title={'Length:'}
                                                paragraph={'10 Hours'}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box marginTop='30px'>
                                        <ButtonAction size={'small'} outlined onClick={() =>{}}>Order Today</ButtonAction>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
`;