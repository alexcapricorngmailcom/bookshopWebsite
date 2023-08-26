import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { MAIN, SECONDARY, BLACK } from '../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../design-system/typography';
import { LineLarge } from '../../../design-system/geometry/lines';
import { ButtonAction } from '../../../design-system/Button';

export const ReadFreeChapter = () => {
    return (
            <Container maxWidth='lg'>
                <Box sx={{padding:'120px 230px',backgroundColor:SECONDARY}}>
                    <Stack flexDirection='column' alignItems='center'>
                        <HeadingH3>Read a free chapter</HeadingH3>
                        <LineLarge sx={{mt:'22px', backgroundColor: MAIN}} />
                        <Paragraph sx={{mt:'22px', textAlign:'center', color: MAIN}}>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</Paragraph>
                        <StyledInputSectionStack>
                            <StyledInput type="text" placeholder='Your Email id...' />
                            <Box sx={{ml:'10px'}}>
                                <ButtonAction size='medium'>Subscribe</ButtonAction> 
                            </Box>
                        </StyledInputSectionStack>
                    </Stack>
                </Box>
            </Container>
    );
}

const StyledInputSectionStack = styled(Stack)`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;
`;

const StyledInput = styled('input')`
    width: 63%;
    border: none;
    padding: 10px 20px;

    font-family: Inter, sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: -0.01em;
    color: ${BLACK};

    &::placeholder {
        color: #969AA0;
    }
`;    