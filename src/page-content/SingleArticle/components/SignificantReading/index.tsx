import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH4, HeadingH5, Paragraph } from '../../../../design-system/typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Quote } from '../../../../design-system/Quote';

import mockedDataArticles from "../../../../mockedDataArticles.json"

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

                    <Box sx={{mt:'20px', ml:'40px'}}>
                        <ul>
                            {mockedDataArticles.articlesItems.map(listItem => (
                                <li key={listItem.id}>
                                    <Stack flexDirection='row' alignItems='center'>
                                        <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                        <Paragraph sx={{ml:'15px', color: MAIN}}>{listItem.listItem}</Paragraph>
                                    </Stack>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    
                    <Box sx={{mt:'40px'}}>
                        <Quote>“Crowdsource term sheet freemium beta stealth responsive web design niche market rock star channels.”</Quote>
                    </Box>

                    <HeadingH4 sx={{mt:'40px'}}>The perfect book for all</HeadingH4>
                    <Paragraph sx={{mt:'30px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.</Paragraph>

                    <Box sx={{mt:'20px', ml:'40px'}}>
                        <ol>
                            {mockedDataArticles.articlesItems.map((listItem, index) => (
                                <li key={listItem.id}>
                                    <Stack flexDirection='row' alignItems='center'>
                                        <Paragraph sx={{color: SECONDARY}}>{index + 1}.</Paragraph>
                                        <Paragraph sx={{ml:'15px', color: MAIN}}>{listItem.listItem}</Paragraph>
                                    </Stack>
                                </li>
                            ))}
                        </ol>
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