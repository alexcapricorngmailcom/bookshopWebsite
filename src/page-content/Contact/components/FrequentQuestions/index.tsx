import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { BACKGROUND } from '../../../../design-system/colors';
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { AccordionItem } from '../KeepInTouch/components/Accordion';

export const FrequentQuestions = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Frequent Questions?</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <Grid container spacing={10} flexDirection='row' mt='-65px'>
                        <Grid item lg={6}>
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
                                title='Do you offer discounts for education?'
                            />
                        </Grid>
                        <Grid item lg={6}>
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
                                title='Do you offer discounts for education?'
                            />
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${BACKGROUND};
`;