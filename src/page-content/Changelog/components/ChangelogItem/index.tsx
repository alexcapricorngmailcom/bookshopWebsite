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
                    <StyledStackItem>
                        <CircleLarge>
                            <HeadingH4 sx={{mt:'7px'}}>V.1</HeadingH4>
                        </CircleLarge>
                        <Paragraph sx={{mt:'20px', textAlign:'center'}}>Initial Pages Webflow Template Release</Paragraph>
                    </StyledStackItem>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledStackItem = styled(Stack)`
    align-items: center; 
    width: 600px; 
    padding: 50px 20px; 
    background-color: ${BACKGROUND};

    @media (max-width: 649px) {
        width: 100%; 
    }
`;