import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

import { HeadingH5, Paragraph } from "../../../../../design-system/typography";
import { MAIN, WHITE } from "../../../../../design-system/colors";

export const ArticlesResourcesGridItem = ({title, paragraph, author, img, alt}:BlogGridItemProps) => {
    return(
        <Grid item lg={4}>
            <article style={{filter: 'drop-shadow(0 35px 25px rgba(4, 11, 20, 0.05))', backgroundColor: WHITE}}>
                <Box width='100%' height='326px'>
                    <img src={img} alt={alt} style={{width:'100%', height:'100%', objectFit:'cover'}} />
                </Box>
                <Box padding='27px'>
                    <HeadingH5>{title}</HeadingH5>
                    <Paragraph sx={{mt:'14px'}}>{paragraph}</Paragraph>
                    <Stack sx={{flexDirection:'row', justifyContent:'space-between', mt:'27px'}}>
                        <Link href="#" underline="none"><StyledParagraphLink sx={{}}>Read more</StyledParagraphLink></Link>
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

const StyledParagraphLink = styled(Paragraph)`
    font-size: 18px; 
    text-decoration: underline; 
    text-underline-offset: 5px; 
    color: ${MAIN};

    &:hover {
        text-decoration: none; 
    }

`;