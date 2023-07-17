import { colors } from "../../../../const/colors";
import { styled } from "@mui/material/styles"
import darkLighBookCover from './Book.png';
import {ContainedButton} from '../Button/ContainedButton'

export const HeroSection = () => {
    return (
        <Section style={{backgroundColor: colors.main, color: colors.white}}>
            <Container>
                <FlexContainer>
                    <FlexItem>
                        <H2>Welcome to Pages</H2>
                        <H1>Books are uniquely portable magic</H1>
                        <P>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</P>
                        <ContainedButton />
                    </FlexItem>

                    <img src={darkLighBookCover} style={{width: '45%'}} alt="the dark light book cover" />
                </FlexContainer>
            </Container>
        </Section>
    )
}

const Section = styled('section')`
    padding-top: 185px;
    padding-bottom: 115px;
`;

const Container = styled('div')`
    width: 100vw;
    max-width: 67vw;
    margin: 0 auto;
    padding: 0 10px;
`;

const FlexContainer = styled('div')`
    display: flex;
    align-items: center;
`;

const FlexItem = styled('div')`
    margin-right: 95px;
`;

const H2 = styled('h2')`
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

const H1 = styled('h1')`
    font-family: Cardo;
    font-size: 3.2em;
    font-weight: 700;
    /* line-height: 72px; */
    letter-spacing: -0.02em;
    text-align: left;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const P = styled('p')`
    font-family: Inter;
    font-size: 0.85em;
    font-weight: 400;
    /* line-height: 34px; */
    letter-spacing: -0.01em;
    text-align: left;
    margin-block-start: 0;
    margin-block-end: 0;
`;




