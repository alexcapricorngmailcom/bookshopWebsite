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
                <Stack flexDirection='row' mt='15px'>
                    <Stack alignItems='center'>
                        <SquareTheLargest sx={{backgroundColor: MAIN}} />
                        <HeadingH6 sx={{mt: '15px'}}>#1B3764</HeadingH6>
                    </Stack>
                    <Stack alignItems='center' ml='40px'>
                        <SquareTheLargest />
                        <HeadingH6 sx={{mt: '15px'}}>#FFCA42</HeadingH6>
                    </Stack>
                    <Stack alignItems='center' ml='40px'>
                        <SquareTheLargest sx={{backgroundColor: BACKGROUND}} />
                        <HeadingH6 sx={{mt: '15px'}}>#F6F8FC</HeadingH6>
                    </Stack>
                </Stack>

                <HeadingH5 sx={{mt: '145px'}}>Paragraph</HeadingH5>
                <Stack flexDirection='row' mt='15px'>
                    <Paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </Paragraph>
                </Stack>

                <HeadingH5 sx={{mt: '145px'}}>Button</HeadingH5>
                <Stack flexDirection='row' mt='15px'>
                    <ButtonAction>Button Text</ButtonAction>
                    <Box ml='40px'>
                        <ButtonAction variant='outlined'>Button Text</ButtonAction>
                    </Box>
                </Stack>
                <Stack flexDirection='row' mt='15px'>
                    <ButtonAction size='medium'>Button Text</ButtonAction>
                    <Box ml='40px'>
                        <ButtonAction size='large' variant='contained'>Button Text</ButtonAction>
                    </Box>
                </Stack>
                <Stack flexDirection='row' mt='15px'>
                    <Box width='100%'>
                        <ButtonAction width='100%'>Button Text</ButtonAction>
                    </Box>
                </Stack>

                <HeadingH5 sx={{mt: '145px'}}>Title</HeadingH5>
                <Box>
                    <HeadingH1>Heading H1 Title</HeadingH1>
                    <HeadingH2>Heading H2 Title</HeadingH2>
                    <HeadingH3>Heading H3 Title</HeadingH3>
                    <HeadingH4 sx={{mt: '5px'}}>Heading H4 Title</HeadingH4>
                    <HeadingH5 sx={{mt: '10px'}}>Heading H5 Title</HeadingH5>
                    <HeadingH6 sx={{mt: '15px'}}>Heading H6 Title</HeadingH6>
                </Box>

                <HeadingH5 sx={{mt: '145px'}}>List</HeadingH5>
                <ul style={{marginTop:'15px'}}>
                    {mockedDataArticles.articlesItems.map(listItem => (
                        <li key={listItem.id}>
                            <Stack flexDirection='row' alignItems='center'>
                                <FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>
                                <Paragraph sx={{ml:'15px', color: MAIN}}>{listItem.listItem}</Paragraph>
                            </Stack>
                        </li>
                    ))}
                </ul>
                <ol style={{marginTop:'30px'}}>
                    {mockedDataArticles.articlesItems.map((listItem, index) => (
                        <li key={listItem.id}>
                            <Stack flexDirection='row' alignItems='center'>
                                <Paragraph sx={{color: SECONDARY}}>{index + 1}.</Paragraph>
                                <Paragraph sx={{ml:'15px', color: MAIN}}>{listItem.listItem}</Paragraph>
                            </Stack>
                        </li>
                    ))}
                </ol>

                <HeadingH5 sx={{mt: '145px'}}>Block Quote</HeadingH5>
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
`;
