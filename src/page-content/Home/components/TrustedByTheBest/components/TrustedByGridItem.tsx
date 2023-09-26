import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { HeadingH5, Paragraph } from "../../../../../design-system/typography";

export const TrustedByGridItem = ({img, alt, title, paragraph}: BookDetailsProps) => {
    return (
        <StyledGrid item lg={3} md={6} sm={6} xs={12} textAlign='center'>
            <Box width='100%' height='90px'>
                <img src={img} alt={alt} style={{width:'100%', height:'100%', objectFit:'contain'}}/>
            </Box>
            <HeadingH5 sx={{mt:'20px'}}>{title}</HeadingH5>
            <StyledParagraph sx={{mt:'10px'}}>{paragraph}</StyledParagraph>
        </StyledGrid>
    );
}

const StyledGrid = styled(Grid)`
    @media (max-width: 1199px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const StyledParagraph = styled(Paragraph)`
    @media (max-width: 1199px) {
        max-width: 295px;
    }
`;


type BookDetailsProps = {
    img: string;
    alt: string;
    title: string;
    paragraph: string;
};