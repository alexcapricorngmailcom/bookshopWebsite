import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { BACKGROUND } from '../../../../../design-system/colors';
import { HeadingH5 } from '../../../../../design-system/typography';
import { CircleMedium } from '../../../../../design-system/geometry/circles';

export const WhatWillYouLearnItem = ({title, paragraph }: WhatWillYouLearnItemProps) => {
    return (
        <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box sx={{padding:'40px 30px', backgroundColor: BACKGROUND}}>
                <CircleMedium>
                    <HeadingH5>{title}</HeadingH5>
                </CircleMedium>
                <HeadingH5 sx={{mt:'30px'}}>{paragraph}</HeadingH5>
            </Box>
        </Grid>
    );
}

type WhatWillYouLearnItemProps = {
    title: string;
    paragraph: string;
}