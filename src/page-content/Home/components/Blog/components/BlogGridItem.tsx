import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { HeadingH5, Paragraph } from "../../../../../design-system/typography";
import { MAIN, WHITE } from "../../../../../design-system/colors";

export const BlogGridItem = ({title, paragraph, author, img, alt}:BlogGridItemProps) => {
    return(
        <Grid item lg={4}>
            <article style={{filter: 'drop-shadow(0 35px 25px rgba(4, 11, 20, 0.05))', backgroundColor: WHITE}}>
                <Box width='100%' height='326px'>
                    <img src={img} alt={alt} style={{width:'100%', height:'100%', objectFit:'cover'}} />
                </Box>
                <Box padding='27px'>
                    <HeadingH5>{title}</HeadingH5>
                    <Paragraph sx={{mt: '14px'}}>{paragraph}</Paragraph>
                    <Stack sx={{flexDirection:'row', justifyContent:'space-between', mt:'27px'}}>
                        <a href="#"><Paragraph sx={{fontSize:'18px', textDecoration: 'underline', textUnderlineOffset: '5px', color: MAIN}}>Read more</Paragraph></a>
                        <Paragraph sx={{fontSize:'18px', color: MAIN}}>{author}</Paragraph>
                    </Stack>
                </Box>
            </article>
        </Grid>
    );
}

type BlogGridItemProps = {
    title: string,
    paragraph: string
    author: string
    img: string | undefined
    alt: string
}