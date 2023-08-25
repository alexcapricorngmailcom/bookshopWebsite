import { useLocation } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH4, HeadingH5, Paragraph } from '../../../../design-system/typography';
// import { UnorderedList } from '../../../../design-system/List';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Quote } from '../../../../design-system/Quote';

import mockedDataArticles from "../../../../mockedDataArticles.json"

export const list = [
    'It has roots in a piece of classical Latin literature from 45 BC', 
    'To generate Lorem Ipsum which looks reasonable', 
    'The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet', 
    'Be standard chunk of Lorem used since the 1500s'
];

let promise = fetch('https://mocki.io/v1/101b4c34-685e-4999-b3f7-e302e6a9f301');
console.log(promise)

export const SignificantReading = () => {

    const location = useLocation();
    const locationId = location.pathname.split('/')[3];
    const filtredMockedDataArticles = mockedDataArticles.articlesItems.filter(item => item.id === locationId)[0];

    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <article>
                    <Box sx={{width:'100%'}}>
                        <img src={filtredMockedDataArticles.singleArticleImgSrc} style={{width:'100%', height:'100%', objectFit:'contain', borderRadius:'5px'}} alt={filtredMockedDataArticles.articleImgAlt} />
                    </Box>
                    <HeadingH5 sx={{mt:'15px'}}>October 6, 2021 / Classics</HeadingH5>
                    <Paragraph sx={{mt:'30px'}}>There are many variations of passages of Lorem Ipsum available, but the major it have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, need to be sure there isn't anything embarrassing hidden in the middle of text. All thLorem Ipsum generators on the Internet tend.</Paragraph>
                    <HeadingH4 sx={{mt:'40px'}}>The perfect book for all</HeadingH4>
                    <Paragraph sx={{mt:'30px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.</Paragraph>

                    <Box sx={{mt:'20px'}}>
                        <ul>
                            <li>
                                <Stack flexDirection='row' alignItems='center'>
                                    <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                    <Paragraph sx={{ml:'15px', color: MAIN}}>It has roots in a piece of classical Latin literature from 45 BC</Paragraph>
                                </Stack>
                            </li>
                            <li>
                                <Stack flexDirection='row' alignItems='center'>
                                    <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                    <Paragraph sx={{ml:'15px', color: MAIN}}>To generate Lorem Ipsum which looks reasonable</Paragraph>
                                </Stack>
                            </li>
                            <li>
                                <Stack flexDirection='row' alignItems='center'>
                                    <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                    <Paragraph sx={{ml:'15px', color: MAIN}}>The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</Paragraph>
                                </Stack>
                            </li>
                            <li>
                                <Stack flexDirection='row' alignItems='center'>
                                    <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                    <Paragraph sx={{ml:'15px', color: MAIN}}>Be standard chunk of Lorem used since the 1500s</Paragraph>
                                </Stack>
                            </li>
                        </ul>
                    </Box>
                    
                    <Box sx={{mt:'40px'}}>
                        <Quote>“Crowdsource term sheet freemium beta stealth responsive web design niche market rock star channels.”</Quote>
                    </Box>

                    <HeadingH4 sx={{mt:'40px'}}>The perfect book for all</HeadingH4>
                    <Paragraph sx={{mt:'30px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.</Paragraph>

                    <Box sx={{mt:'20px'}}>
                        <ul>
                            <li>
                                <Stack flexDirection='row' alignItems='center'>
                                    <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                    <Paragraph sx={{ml:'15px', color: MAIN}}>It has roots in a piece of classical Latin literature from 45 BC</Paragraph>
                                </Stack>
                            </li>
                            <li>
                                <Stack flexDirection='row' alignItems='center'>
                                    <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                    <Paragraph sx={{ml:'15px', color: MAIN}}>To generate Lorem Ipsum which looks reasonable</Paragraph>
                                </Stack>
                            </li>
                            <li>
                                <Stack flexDirection='row' alignItems='center'>
                                    <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                    <Paragraph sx={{ml:'15px', color: MAIN}}>The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</Paragraph>
                                </Stack>
                            </li>
                            <li>
                                <Stack flexDirection='row' alignItems='center'>
                                    <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                    <Paragraph sx={{ml:'15px', color: MAIN}}>Be standard chunk of Lorem used since the 1500s</Paragraph>
                                </Stack>
                            </li>
                        </ul>
                    </Box>
                </article>
            </Container>
        </StyledSection>
                
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
`;