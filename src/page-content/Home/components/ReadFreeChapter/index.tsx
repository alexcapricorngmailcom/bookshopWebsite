import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { ButtonAction } from '../../../../design-system/Button';

export const ReadFreeChapter = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Box sx={{padding:'120px 230px',backgroundColor:SECONDARY}}>
                    <Stack flexDirection='column' alignItems='center'>
                        <HeadingH3>What will you learn?</HeadingH3>
                        <LineLarge sx={{marginTop:'22px', backgroundColor: MAIN}} />
                        <Paragraph sx={{marginTop:'22px', textAlign:'center', color: MAIN}}>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</Paragraph>
                        <Stack flexDirection='row'>
                            <StyledInput type="text" placeholder='Your Email id...' />
                            <ButtonAction size='large' onClick={() => {}}>Subscribe</ButtonAction>
                        </Stack>
                    </Stack>
                </Box>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
`;

const StyledInput = styled('input')`
    width: 100%;
`;