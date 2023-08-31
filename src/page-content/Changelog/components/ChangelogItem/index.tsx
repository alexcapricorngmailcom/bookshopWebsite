import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { BACKGROUND, WHITE } from '../../../../design-system/colors';
import { HeadingH4, Paragraph } from '../../../../design-system/typography';
import { CircleLarge } from '../../../../design-system/geometry/circles';

export const ChangelogItem = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack alignItems='center'>
                    <Stack alignItems='center' sx={{ width: '600px', padding: '50px', backgroundColor: BACKGROUND }}>
                        <CircleLarge>
                            <HeadingH4 sx={{mt:'7px'}}>V.1</HeadingH4>
                        </CircleLarge>
                        <Paragraph sx={{mt:'20px'}}>Initial Pages Webflow Template Release</Paragraph>
                    </Stack>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};
`;