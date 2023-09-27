import { styled } from '@mui/material/styles';
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import { HeadingH5, HeadingH6, Paragraph } from "../../../../../design-system/typography"
import { MAIN, SECONDARY, PARAGRAPH_SECONDARY, WHITE } from '../../../../../design-system/colors';

export const WhatReadersSayArticle = ({img, alt, userName, title, paragraph}:TestimonialArticleProps) => {
    return(
        <article style={{padding:'30px', backgroundColor: MAIN}}>
            <Stack flexDirection='row' alignItems='center'>
                <StyledBox>
                    <img src={img} alt={alt} style={{width:'100%', height:'100%'}} />
                </StyledBox>
                <Box ml='20px'>
                    <HeadingH5 sx={{color: WHITE}}>{userName}</HeadingH5>
                    <Rating
                        sx={{mt: '10px'}}
                        icon={<CircleIcon fontSize="inherit" sx={{color: SECONDARY}} />} 
                        emptyIcon={<CircleOutlinedIcon fontSize="inherit" sx={{color: SECONDARY}} />} 
                        name="half-rating"                                    
                        size='small'
                        defaultValue={4.5} 
                        precision={0.5} 
                        readOnly 
                    />
                </Box>
            </Stack>
            <HeadingH6 sx={{mt:'22px', color: WHITE}}>{title}</HeadingH6>
            <Paragraph sx={{mt:'12px', textAlign:'justify', color: PARAGRAPH_SECONDARY}}>{paragraph}</Paragraph>
        </article>
    );
}

type TestimonialArticleProps = {
    img: string | undefined;
    alt: string;
    userName: string;
    title: string;
    paragraph: string;
}

const StyledBox = styled(Box)`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
`;