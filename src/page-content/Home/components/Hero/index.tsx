import { colors } from "../../../../const/colors";
import { styled } from "@mui/material/styles"
import darkLightBookCover from './Book.png';
import {MainButton} from '../Button/MainButton'
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const HeroSection = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <Stack flexDirection='row'>
                    <Stack>
                        <StyledH2>Welcome to Pages</StyledH2>
                        <StyledH1>Books are uniquely portable magic</StyledH1>
                        <StyledP>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</StyledP>
                        <MainButton/>
                    </Stack>
                    <Box width='45%'><img src={darkLightBookCover} style={{width: '100%'}} alt="the dark light book cover" /></Box>
                </Stack>
            </StyledContainer>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding-top: 185px;
    padding-bottom: 115px;
    background-color: ${colors.main};
    color: ${colors.white};
`;

const StyledContainer = styled('div')`
    width: 100vw;
    max-width: 67vw;
    margin: 0 auto;
    padding: 0 10px;
`;

const StyledH2 = styled('h2')`
    font-family: Cardo;
    font-size: 1.5em;
    font-style: italic;
    font-weight: 400;
    /* line-height: 37px; */
    letter-spacing: -0.02em;
    text-align: left;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const StyledH1 = styled('h1')`
    font-family: Cardo;
    font-size: 3.2em;
    font-weight: 700;
    /* line-height: 72px; */
    letter-spacing: -0.02em;
    text-align: left;
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




