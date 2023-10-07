import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import getBookCopyToday from './assets/getBookCopyToday.png'
import { ButtonAction } from '../../../../design-system/Button';
import { MAIN, PARAGRAPH_SECONDARY, WHITE } from '../../../../design-system/colors'
import { HeadingH3, Paragraph } from '../../../../design-system/typography'
import { LineLarge } from '../../../../design-system/geometry/lines'

export const GetBookCopyToday = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={{ lg: 10, md: 0, sm: 0, xs: 0 }}  alignItems='center'>
                    <StyledGriditem1 item lg={6} md={12} sm={12} xs={12}>
                        <HeadingH3 sx={{color: WHITE}}>Get Book Copy Today!</HeadingH3>
                        <LineLarge sx={{mt:'20px'}} />
                        <StyledParagraph>There are many variations of passages of Lorem available, but the majority have suffered alteration in some form.</StyledParagraph>
                        <Box mt='30px'>
                            <ButtonAction component={RouterLink} to='/myStore'>Order Today</ButtonAction> 
                        </Box>
                    </StyledGriditem1>
                    <StyledGriditem2 item lg={6} md={12} sm={12} xs={12}>
                        <StyledImageBox>
                            <img src={getBookCopyToday} style={{width:'100%', height:'100%'}} alt="callout" />
                        </StyledImageBox>
                    </StyledGriditem2>
                </Grid>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding-top: 80px;
    padding-bottom: 70px;
    background-color: ${MAIN};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledGriditem1 = styled(Grid)`
    
    @media (max-width: 1199px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const StyledParagraph = styled(Paragraph)`
    margin-top: 20px;
    text-align: justify;
    color: ${PARAGRAPH_SECONDARY};

    @media (max-width: 1199px) {
        text-align: center;
    }
`;

const StyledGriditem2 = styled(Grid)`
    padding-top: 40px;
`;

const StyledImageBox = styled(Box)`
    @media (max-width: 1199px) {
        max-width: 540px;
        margin: 0 auto;
    }
`;