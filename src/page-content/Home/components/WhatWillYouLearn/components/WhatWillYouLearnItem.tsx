import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { BACKGROUND } from '../../../../../design-system/colors';
import { HeadingH5 } from '../../../../../design-system/typography';
import { CircleLarge } from '../../../../../design-system/geometry/circles';

export const WhatWillYouLearnItem = ({title, paragraph }: WhatWillYouLearnItemProps) => {
    return (
        <Grid item lg={6} md={6} sm={6}>
            <Box sx={{padding:'40px 30px', backgroundColor: BACKGROUND}}>
                <CircleLarge>
                    <HeadingH5>{title}</HeadingH5>
                </CircleLarge>
                <HeadingH5 sx={{mt:'30px'}}>{paragraph}</HeadingH5>
            </Box>
        </Grid>
    );
}

type WhatWillYouLearnItemProps = {
    title: string;
    paragraph: string;
}