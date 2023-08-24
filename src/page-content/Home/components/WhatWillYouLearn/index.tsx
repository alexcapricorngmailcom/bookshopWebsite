import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import whatWillYouLearnImg from './assets/whatWillYouLearnImg.png'
import { WHITE } from '../../../../design-system/colors';
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';
import { WhatWillYouLearnItem } from './components/WhatWillYouLearnItem';

export const WhatWillYouLearn = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>What will you learn?</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                    <Grid container spacing={6} alignItems='center' marginTop='0px'>
                        <Grid item lg={6}>
                            <Grid container rowSpacing={4} columnSpacing={4}>
                                <WhatWillYouLearnItem 
                                    title='01'
                                    paragraph='Use HDFS & Map Reduce for storing & analyzing data at scale.'
                                />
                                <WhatWillYouLearnItem 
                                    title='02'
                                    paragraph='Use HDFS & Map Reduce for storing & analyzing data at scale.'
                                />
                                <WhatWillYouLearnItem 
                                    title='03'
                                    paragraph='Use HDFS & Map Reduce for storing & analyzing data at scale.'
                                />
                                <WhatWillYouLearnItem 
                                    title='04'
                                    paragraph='Use HDFS & Map Reduce for storing & analyzing data at scale.'
                                />
                            </Grid>
                        </Grid>
                        <Grid item lg={6}>
                            <img src={whatWillYouLearnImg} style={{width:'100%', height:'100%'}} alt="what will you learn" />
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};
`;