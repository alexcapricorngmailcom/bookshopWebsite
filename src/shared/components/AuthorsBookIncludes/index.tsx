import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import atomicOneSmall from '../../assets/img/atomicOneSmall.png'
import theDarkLightSmall from '../../assets/img/theDarkLightSmall.png'

import { HeadingH3, HeadingH4, Paragraph } from '../../../design-system/typography';
import { LineLarge } from '../../../design-system/geometry/lines';
import { BookDetails } from '../../../shared/components/BookDetails';
import { ButtonAction } from '../../../design-system/Button';

// TODO make a component

export const AuthorsBookIncludes = () => {
    return (
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Author’s Book Includes</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <Grid container spacing={6} mt='22px'>
                        <Grid item lg={6}>
                            <Grid container spacing={4} alignItems='center'>
                                <Grid item md={6} sm={6} xs={12}>
                                    <Box sx={{filter: 'drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1))'}}>
                                        <img src={atomicOneSmall} style={{width: '100%', height: '100%'}} alt="atomic one’s book cover" />
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={6} xs={12}>
                                    <HeadingH4>Atomic One’s</HeadingH4>
                                    <Paragraph sx={{mt:'14px'}}>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</Paragraph>
                                    <Grid container mt='30px'>
                                        <Grid item md={6} sm={6}>
                                            <BookDetails
                                                title={'Pages:'}
                                                paragraph={'472 pages'}
                                            />
                                        </Grid>
                                        <Grid item md={6} sm={6}>
                                            <BookDetails 
                                                title={'Length:'}
                                                paragraph={'8 hours'}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box marginTop='30px'>
                                        <ButtonAction variant='outlined' component={RouterLink} to='/myStore'>Order Today</ButtonAction>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={6}>
                            <Grid container spacing={4} alignItems='center'>
                                <Grid item md={6} sm={6} xs={12}>
                                    <Box sx={{filter: 'drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1))'}}>
                                        <img src={theDarkLightSmall} style={{width: '100%'}} alt="the dark light book cover" />
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={6} xs={12}>
                                    <HeadingH4>The Dark Light</HeadingH4>
                                    <Paragraph sx={{mt:'14px'}}>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</Paragraph>
                                    <Grid container mt='30px'>
                                        <Grid item md={6} sm={6}>
                                            <BookDetails
                                                title={'Pages:'}
                                                paragraph={'586 pages'}
                                            />
                                        </Grid>
                                        <Grid item md={6} sm={6}>
                                            <BookDetails 
                                                title={'Length:'}
                                                paragraph={'10 hours'}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box marginTop='30px'>
                                        <ButtonAction variant='outlined' component={RouterLink} to='/myStore'>Order Today</ButtonAction>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
    );
}