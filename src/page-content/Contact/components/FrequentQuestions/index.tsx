import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { BACKGROUND } from '../../../../design-system/colors';
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { AccordionItem } from './components/Accordion';

export const FrequentQuestions = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3 sx={{textAlign:'center'}}>Frequent Questions?</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <StyledGridContainer container spacing={{ lg: 10, md: 10, sm: 0, xs: 0 }}>
                        <Grid item lg={6} md={6}>
                            <AccordionItem
                                title='Do you offer discounts for education?'
                            />
                            <AccordionItem
                                title='Is Hack Producivity book available on the stores?'
                            />
                            <AccordionItem
                                title='What is Hack Productivity book about?'
                            />
                            <AccordionItem
                                title='Where can I get Hack Productivity book?'
                            />
                            <AccordionItem
                                title='What is Hack Productivity book about?'
                            />
                        </Grid>
                        <StyledGridItem2 item lg={6} md={6}>
                            <AccordionItem
                                title='Do you offer discounts for education?'
                            />
                            <AccordionItem
                                title='Is Hack Producivity book available on the stores?'
                            />
                            <AccordionItem
                                title='What is Hack Productivity book about?'
                            />
                            <AccordionItem
                                title='Where can I get Hack Productivity book?'
                            />
                            <AccordionItem
                                title='What is Hack Productivity book about?'
                            />
                        </StyledGridItem2>
                    </StyledGridContainer>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${BACKGROUND};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledGridContainer = styled(Grid)`
    flex-direction: row;
    margin-top: -65px;

    @media (max-width: 899px) {
        margin-top: 0px;
    }
`;

const StyledGridItem2 = styled(Grid)`
    @media (max-width: 899px) {
        padding-top: 0px !important;
    }

    & > :last-child {
        border: none
    }
`;