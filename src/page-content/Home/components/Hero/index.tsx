import { MAIN, WHITE } from '../../../../design-system/colors'
import { HEADING_H1, PARAGRAPH } from '../../../../design-system/typography'
import { styled } from "@mui/material/styles";
import { MainButton } from '../../../../design-system/Button/MainButton';
import darkLightBookCover from './Book.png';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

// import Typography from '@mui/material/Typography';

export const HeroSection = () => {
    return (
        <StyledSection>
            <Container maxWidth="md">
                <Stack flexDirection='row' alignItems='center'>
                    <Stack width='55%' paddingRight='90px'>
                        <StyledH2>Welcome to Pages</StyledH2>
                        <HEADING_H1>Books are uniquely portable magic</HEADING_H1>
                        <PARAGRAPH>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</PARAGRAPH>
                        <Stack flexDirection='row'>
                            <MainButton/>
                            <MainButton/>
                        </Stack>
                        
                    </Stack>
                    <Box width='45%'><img src={darkLightBookCover} style={{width: '100%'}} alt="the dark light book cover" /></Box>
                </Stack>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding-top: 185px;
    padding-bottom: 115px;
    background-color: ${MAIN};
    color: ${WHITE};
`;

const StyledH2 = styled('h2')`
    font-family: Cardo;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    /* line-height: 37px; */
    letter-spacing: -0.02em;
    /* text-align: left; */

    margin-block-start: 0;
    margin-block-end: 0;
`;

const StyledP = styled('p')`
    font-family: Inter;
    font-size: 0.85em;
    font-weight: 400;
    /* line-height: 34px; */
    letter-spacing: -0.01em;
    text-align: left;
    margin-block-start: 0;
    margin-block-end: 0;
    color: #B4C7E7;
`;




