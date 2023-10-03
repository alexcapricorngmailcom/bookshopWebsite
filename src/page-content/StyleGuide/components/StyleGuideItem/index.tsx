import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { BACKGROUND, MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH1, HeadingH2, HeadingH3, HeadingH4, HeadingH5, HeadingH6, Paragraph } from '../../../../design-system/typography';
import { SquareTheLargest } from '../../../../design-system/geometry/squares';
import { ButtonAction } from '../../../../design-system/Button';
import { Quote } from '../../../../design-system/Quote';
import { Form } from '../../../../design-system/Form';

import mockedDataArticles from "../../../../mockedDataArticles.json"

export const StyleGuideItem = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <HeadingH5>Colors</HeadingH5>
                <StyledStackContainer mt='15px'>
                    <Stack alignItems='center'>
                        <StyledSquareTheLargest sx={{backgroundColor: MAIN}} />
                        <HeadingH6 sx={{mt: '15px'}}>#1B3764</HeadingH6>
                    </Stack>
                    <Stack alignItems='center' ml='40px'>
                        <StyledSquareTheLargest />
                        <HeadingH6 sx={{mt: '15px'}}>#FFCA42</HeadingH6>
                    </Stack>
                    <Stack alignItems='center' ml='40px'>
                        <StyledSquareTheLargest sx={{backgroundColor: BACKGROUND}} />
                        <HeadingH6 sx={{mt: '15px'}}>#F6F8FC</HeadingH6>
                    </Stack>
                </StyledStackContainer>

                <StyledHeadingH5>Paragraph</StyledHeadingH5>
                <Stack flexDirection='row' mt='15px'>
                    <Paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </Paragraph>
                </Stack>

                <StyledHeadingH5>Button</StyledHeadingH5>
                <StyledButtonStack mt='15px'>
                    <ButtonAction>Button Text</ButtonAction>
                    <StyledButtonBox>
                        <ButtonAction variant='outlined'>Button Text</ButtonAction>
                    </StyledButtonBox>
                </StyledButtonStack>
                <StyledButtonStack mt='15px'>
                    <ButtonAction size='medium'>Button Text</ButtonAction>
                    <StyledButtonBox>
                        <ButtonAction size='large' variant='contained'>Button Text</ButtonAction>
                    </StyledButtonBox>
                </StyledButtonStack>
                <StyledButtonStack mt='15px'>
                    <Box width='100%'>
                        <ButtonAction width='100%'>Button Text</ButtonAction>
                    </Box>
                </StyledButtonStack>

                <StyledHeadingH5>Title</StyledHeadingH5>
                <Box>
                    <StyledHeadingH1>Heading H1 Title</StyledHeadingH1>
                    <StyledHeadingH2>Heading H2 Title</StyledHeadingH2>
                    <StyledHeadingH3>Heading H3 Title</StyledHeadingH3>
                    <HeadingH4 sx={{mt: '5px'}}>Heading H4 Title</HeadingH4>
                    <HeadingH5 sx={{mt: '10px'}}>Heading H5 Title</HeadingH5>
                    <HeadingH6 sx={{mt: '15px'}}>Heading H6 Title</HeadingH6>
                </Box>

                <StyledHeadingH5>List</StyledHeadingH5>
                <ul style={{marginTop:'15px'}}>
                    {mockedDataArticles.articlesItems.map(listItem => (
                        <li key={listItem.id}>
                            <Stack flexDirection='row' alignItems='center'>
                                <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                <StyledParagraph sx={{ml:'15px', color: MAIN}}>{listItem.listItem}</StyledParagraph>
                            </Stack>
                        </li>
                    ))}
                </ul>
                <ol style={{marginTop:'30px'}}>
                    {mockedDataArticles.articlesItems.map((listItem, index) => (
                        <li key={listItem.id}>
                            <Stack flexDirection='row' alignItems='center'>
                                <Paragraph sx={{color: SECONDARY}}>{index + 1}.</Paragraph>
                                <StyledParagraph sx={{ml:'15px', color: MAIN}}>{listItem.listItem}</StyledParagraph>
                            </Stack>
                        </li>
                    ))}
                </ol>

                <StyledHeadingH5>Block Quote</StyledHeadingH5>
                <Box sx={{mt: '15px'}}>
                    <Quote>
                        “We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers. new writers, where children get hooked on the thrill of reading that can last a lifetime.”
                    </Quote>
                </Box>

                <HeadingH5 sx={{mt: '145px'}}>Input Fields</HeadingH5>
                <Box sx={{mt: '15px'}}>
                    <Form />
                </Box>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledStackContainer = styled(Stack)`
    flex-direction: row;

    @media (max-width: 599px) {
        flex-direction: column;
        align-items: flex-start;
        
        & > div {
            margin-left: 0px;
        }
    }
`;

const StyledSquareTheLargest = styled(SquareTheLargest)`

    @media (max-width: 1099px) {
        width: 170px;
        height: 170px;   
    }

    @media (max-width: 899px) {
        width: 150px;
        height: 150px;   
    }
`;

const StyledButtonStack = styled(Stack)`
    flex-direction: row;

    @media (max-width: 654px) {
        flex-direction: column;
    }
`;

const StyledButtonBox = styled(Box)`
    margin-left: 40px;

    @media (max-width: 654px) {
        margin-left: 0px;
        margin-top: 15px;
    }
`;

const StyledHeadingH1 = styled(HeadingH1)`

    @media (max-width: 489px) {
        font-size: 52px;    
    }

    @media (max-width: 455px) {
        font-size: 48px;    
    }

    @media (max-width: 425px) {
        font-size: 46px;    
    }
`;

const StyledHeadingH2 = styled(HeadingH2)`

    @media (max-width: 489px) {
        font-size: 48px;    
    }

    @media (max-width: 455px) {
        font-size: 44px;    
    }

    @media (max-width: 425px) {
        font-size: 42px;    
    }
`;
const StyledHeadingH3 = styled(HeadingH3)`

    @media (max-width: 489px) {
        font-size: 42px;    
    }

    @media (max-width: 455px) {
        font-size: 38px;    
    }

    @media (max-width: 425px) {
        font-size: 36px;    
    }
`;

const StyledHeadingH5 = styled(HeadingH5)`
    margin-top: 145px;

    @media (max-width: 599px) {
        margin-top: 85px;
    }
`;

const StyledParagraph = styled(Paragraph)`

    @media (max-width: 624px) {
        font-size: 18px;
    }
`;

