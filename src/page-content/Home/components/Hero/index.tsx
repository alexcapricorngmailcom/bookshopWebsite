import { styled } from "@mui/material/styles";
import darkLightBookCover from './assets/Book.png';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { BUTTON } from '../../../../design-system/buttons/';
import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors'
import { HEADING_H1, HEADING_H5, PARAGRAPH } from '../../../../design-system/typography'
import { LINE_34PX } from '../../../../design-system/geometry/lines'
import { CIRCLE_16PX } from "../../../../design-system/geometry/circles";


// import Typography from '@mui/material/Typography';

export const HeroSection = () => {
    return (
        <StyledSection>
            <Container maxWidth="lg">
                <Stack flexDirection='row' alignItems='center'>
                    <Stack width='55%' paddingRight='90px'>
                        <Stack flexDirection='row' alignItems='center'>
                            <LINE_34PX></LINE_34PX>
                            <HEADING_H5>Welcome to Pages</HEADING_H5>
                        </Stack>
                        <HEADING_H1>Books are uniquely portable magic</HEADING_H1>
                        <PARAGRAPH>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</PARAGRAPH>
                        <Stack flexDirection='row' alignItems='center'>
                            <BUTTON>Order Today</BUTTON>
                            <Stack alignItems='center'>
                                <Box position='relative'>
                                    <StyledButton>Read Free Demo<StyledLine_34px /></StyledButton>
                                    
                                </Box>
                            </Stack>
                        </Stack>
                        <Stack flexDirection='row' justifyContent='space-between'>
                            <Box>
                                <Stack flexDirection='row' alignItems='center'>
                                    <CIRCLE_16PX />
                                    <HEADING_H5>Pages:</HEADING_H5>
                                </Stack>
                                <PARAGRAPH>586pages</PARAGRAPH>
                            </Box>
                            <Box>
                                <Stack flexDirection='row' alignItems='center'>
                                    <CIRCLE_16PX></CIRCLE_16PX>
                                    <HEADING_H5>Length:</HEADING_H5>
                                </Stack>
                                <PARAGRAPH>10 Hours</PARAGRAPH>
                            </Box>
                            <Box>
                                <Stack flexDirection='row' alignItems='center'>
                                    <CIRCLE_16PX></CIRCLE_16PX>
                                    <HEADING_H5>Ratings:</HEADING_H5>
                                </Stack>
                                <PARAGRAPH>4.5/5 (305 ratings)</PARAGRAPH>
                            </Box>
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

const StyledButton = styled(BUTTON)`
    border: none;
    background-color: transparent;
    color: ${WHITE};

    &:hover, &:active {
        border: none;
        background-color: transparent;
        color: ${SECONDARY};
        transition: 0.2s;
    }

    &:hover + div, &:active + div {
        background-color: ${SECONDARY};
        transition: 0.2s;
    }
`;

const StyledLine_34px = styled(LINE_34PX)`
    width: 70%;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${WHITE};
`;