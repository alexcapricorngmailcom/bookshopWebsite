import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { HeadingH5, Paragraph } from "../../../../../design-system/typography";

export const TrustedByGridItem = ({img, alt, title, paragraph}: BookDetailsProps) => {
    return (
        <Grid item lg={3} md={6} sm={6} xs={12} textAlign='center'>
            <StyledBox>
                <Box width='100%' height='90px'>
                    <img src={img} alt={alt} style={{width:'100%', height:'100%', objectFit:'contain'}}/>
                </Box>
                <HeadingH5 sx={{mt:'20px'}}>{title}</HeadingH5>
                <Paragraph sx={{mt:'10px'}}>{paragraph}</Paragraph>
            </StyledBox>
        </Grid>
    );
}

const StyledBox = styled(Box)`
    @media (max-width: 1199px) {
        max-width: 295px;
        margin: 0 auto;
    }
`;


type BookDetailsProps = {
    img: string;
    alt: string;
    title: string;
    paragraph: string;
};