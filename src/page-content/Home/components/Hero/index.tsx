import { styled } from "@mui/material/styles";
import darkLightBookCover from './assets/Book.png';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { ButtonAction } from '../../../../design-system/Button/';
import { MAIN, WHITE } from '../../../../design-system/colors'
import { HeadingH1, HeadingH5, Paragraph } from '../../../../design-system/typography'
import { LineSmall } from '../../../../design-system/geometry/lines'
import { CircleSmall } from "../../../../design-system/geometry/circles";

export const HeroSection = () => {
    return (
        <StyledSection>
            <Container maxWidth="lg">
                <Grid container spacing={12} alignItems='center'>
                    <Grid item md={6} sm={12}>
                        <Stack flexDirection='row' alignItems='center'>
                            <LineSmall />
                            <HeadingH5>Welcome to Pages</HeadingH5>
                        </Stack>
                        <HeadingH1 sx={{lineHeight: '110%'}}>Books are uniquely portable magic</HeadingH1>
                        <Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</Paragraph>
                        <Stack flexDirection='row' alignItems='center' marginTop='50px'>
                            <ButtonAction size={'small'} onClick={() =>{}}>Order Today</ButtonAction>
                            <ButtonAction size={'small'} outlined borderWidth onClick={() =>{}}>Read Free Demo</ButtonAction>
                        </Stack>
                        <Grid container marginTop='50px'>
                            <Grid item md={4} sm={4}>
                                <Stack flexDirection='row' alignItems='center'>
                                    <CircleSmall />
                                    <HeadingH5>Pages:</HeadingH5>
                                </Stack>
                                <Paragraph>586pages</Paragraph>
                            </Grid>
                            <Grid item md={4} sm={4}>
                                <Stack flexDirection='row' alignItems='center'>
                                    <CircleSmall />
                                    <HeadingH5>Length:</HeadingH5>
                                </Stack>
                                <Paragraph>10 Hours</Paragraph>
                            </Grid>
                            <Grid item md={4} sm={4}>
                                <Stack flexDirection='row' alignItems='center'>
                                    <CircleSmall />
                                    <HeadingH5>Ratings:</HeadingH5>
                                </Stack>
                                <Paragraph>4.5/5 (305 ratings)</Paragraph>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <img src={darkLightBookCover} style={{width: '100%'}} alt="the dark light book cover" />
                    </Grid>
                </Grid>
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

const StyledButtonLine = styled('div')`
    width: 80%;
    height: 1px;
    background-color: ${WHITE};
    margin: 0 auto;
`;