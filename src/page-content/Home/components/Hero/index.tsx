import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
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
                <Grid container spacing={{ lg: 12, md: 0, sm: 0, xs: 0 }} alignItems='center'>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <StyledStackHeadingH5>
                            <LineSmall />
                            <HeadingH5 sx={{ml:'15px', color: WHITE}}>Welcome to Pages</HeadingH5>
                        </StyledStackHeadingH5>
                        <StyledHeadingH1>Books are uniquely portable magic</StyledHeadingH1>
                        <StyledParagraph>There are many variations of passages of Lorem available, but the majority have suffered alteration in some form.</StyledParagraph>
                        <StyledStackButton>
                            <ButtonAction component={RouterLink} to='/myStore'>Order Today</ButtonAction> 
                            <ButtonAction variant='text' onClick={scrollOnClick}><Box sx={{textDecorationLine:'underline', textUnderlineOffset: '7px'}}>Read Free Demo</Box></ButtonAction>
                        </StyledStackButton>
                        <StyledGridSubContainer container>
                            <StyledGridSubItem item lg={3.5} md={4} sm={3.5} xs={6}>
                                <BookDetails
                                    title='Pages:'
                                    paragraph='586 pages'
                                    color={WHITE}
                                />
                            </StyledGridSubItem>
                            <StyledGridSubItem item lg={3.5} md={4} sm={3.5} xs={6}>
                                <BookDetails 
                                    title='Length:'
                                    paragraph='10 hours'
                                    color={WHITE}
                                />
                            </StyledGridSubItem>
                            <StyledGridSubItem item lg={5} md={4} sm={5} xs={12}>
                                <BookDetails 
                                    title='Ratings:'
                                    paragraph='4.5/5 (305 ratings)'
                                    color={WHITE}
                                />
                            </StyledGridSubItem>
                        </StyledGridSubContainer>
                    </Grid>
                    <StyledGridItem2 item lg={6} md={12} sm={12} xs={12}>
                        <StyledImageBox>
                            <img src={theDarkLightLarge} style={{width: '100%', height: '100%'}} alt="the dark light book cover" />
                        </StyledImageBox>
                    </StyledGridItem2>
                </Grid>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding-top: 185px;
    padding-bottom: 145px;
    background-color: ${MAIN};

    @media (max-width: 1199px) {
        padding-bottom: 125px;
    }

    @media (max-width: 599px) {
        padding-bottom: 85px;
    }
`;

const StyledStackHeadingH5 = styled(Stack)`
    flex-direction: row; 
    align-items: center;

    @media (max-width: 1199px) {
        justify-content: center;
    }
`;

const StyledHeadingH1 = styled(HeadingH1)`
    margin-top: 16px; 
    line-height: 110%; 
    color: WHITE;

    @media (max-width: 1199px) {
        text-align: center;
    }
`;

const StyledParagraph = styled(Paragraph)`
    margin-top: 32px; 
    text-align: justify; 
    color: ${PARAGRAPH_SECONDARY};

    @media (max-width: 1199px) {
        text-align: center;
    }
`;

const StyledStackButton = styled(Stack)`
    flex-direction: row;
    align-items: center; 
    margin-top: 50px;
    
    @media (max-width: 1199px) {
        justify-content: center;
    }
    @media (max-width: 499px) {
        flex-direction: column;

        & > :last-child {
            margin-top: 30px;
        }
    }
`;

const StyledGridSubContainer = styled(Grid)`
    margin-top: 50px;

    @media (max-width: 599px) {
        margin-top: 30px;

        & > :last-child {
            margin-top: 30px;
        }
    }
`;

const StyledGridSubItem = styled(Grid)`

    @media (max-width: 1199px) {
        text-align: center;
    }

    @media (max-width: 1199px) {
        & > div > div {
            justify-content: center;
        }
    }
`;

const StyledGridItem2 = styled(Grid)`
    @media (max-width: 1199px) {
        margin-top: 50px;
    }
`;
const StyledImageBox = styled(Box)`
    @media (max-width: 1199px) {
        max-width: 430px;
        margin: 0 auto;
    }
`;