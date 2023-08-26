import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { HeadingH5, Paragraph } from "../../../../../design-system/typography";

export const TrustedByGridItem = ({img, alt, title, paragraph}: BookDetailsProps) => {
    return (
        <Grid item lg={3} sm={6} xs={12} textAlign='center'>
            <Box width='100%' height='90px'>
                <img src={img} alt={alt} style={{width:'100%', height:'100%', objectFit:'contain'}}/>
            </Box>
            <HeadingH5 sx={{mt:'20px'}}>{title}</HeadingH5>
            <Paragraph sx={{mt:'10px'}}>{paragraph}</Paragraph>
        </Grid>
    );
}

type BookDetailsProps = {
    img: string;
    alt: string;
    title: string;
    paragraph: string;
};