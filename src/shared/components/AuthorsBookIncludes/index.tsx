import { Link as RouterLink } from 'react-router-dom';
import { styled } from "@mui/material/styles";
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

export const AuthorsBookIncludes = () => {
    return (
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3 sx={{textAlign:'center'}}>Author’s Book Includes</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <Grid container spacing={6} mt='-13px'>
                        <StyledGridItem item lg={6} md={12} sm={12} xs={12}>
                            <Grid container spacing={4} alignItems='center'>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <StyledImgBox>
                                        <img src={atomicOneSmall} style={{width: '100%', height: '100%'}} alt="atomic one’s book cover" />
                                    </StyledImgBox>
                                </Grid>
                                <StyledGridSubItem item lg={6} md={6} sm={12} xs={12}>
                                    <HeadingH4>Atomic One’s</HeadingH4>
                                    <StyledParagraph sx={{mt:'14px', textAlign:'justify'}}>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</StyledParagraph>
                                    <Grid container mt='30px'>
                                        <Grid item lg={6} md={6} sm={6} xs={6}>
                                            <BookDetails
                                                title={'Pages:'}
                                                paragraph={'472 pages'}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={6}>
                                            <BookDetails 
                                                title={'Length:'}
                                                paragraph={'8 hours'}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box marginTop='30px'>
                                        <ButtonAction variant='outlined' component={RouterLink} to='/myStore'>Order Today</ButtonAction>
                                    </Box>
                                </StyledGridSubItem>
                            </Grid>
                        </StyledGridItem>
                        <StyledGridItem item lg={6} md={12} sm={12} xs={12}>
                            <Grid container spacing={4} alignItems='center'>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <StyledImgBox>
                                        <img src={theDarkLightSmall} style={{width: '100%', height: '100%'}} alt="the dark light book cover" />
                                    </StyledImgBox>
                                </Grid>
                                <StyledGridSubItem item lg={6} md={6} sm={12} xs={12}>
                                    <HeadingH4>The Dark Light</HeadingH4>
                                    <StyledParagraph sx={{mt:'14px', textAlign:'justify'}}>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</StyledParagraph>
                                    <Grid container mt='30px'>
                                        <Grid item lg={6} md={6} sm={6} xs={6}>
                                            <BookDetails
                                                title={'Pages:'}
                                                paragraph={'586 pages'}
                                            />
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={6} xs={6}>
                                            <BookDetails 
                                                title={'Length:'}
                                                paragraph={'10 hours'}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box marginTop='30px'>
                                        <ButtonAction variant='outlined' component={RouterLink} to='/myStore'>Order Today</ButtonAction>
                                    </Box>
                                </StyledGridSubItem>
                            </Grid>
                        </StyledGridItem>
                    </Grid>
                </Stack>
            </Container>
    );
}

const StyledGridItem = styled(Grid)`
    @media (max-width: 1199px) {
        max-width: 700px;
        margin: 0 auto;
    }
    @media (max-width: 899px) {
        max-width: 430px;
    }
`;

const StyledGridSubItem = styled(Grid)`
    @media (max-width: 899px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const StyledImgBox = styled(Box)`
    width: 260px; 
    filter: drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1));

    @media (max-width: 899px) {
        margin: 0 auto;
    }
`;

const StyledParagraph = styled(Paragraph)`

    @media (max-width: 899px) {
        text-align: center;
    }
`;