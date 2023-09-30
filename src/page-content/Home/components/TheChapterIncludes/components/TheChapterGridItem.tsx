import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { WHITE } from "../../../../../design-system/colors";
import { HeadingH5, Paragraph } from "../../../../../design-system/typography";
import { TheChapterBookDetails } from './TheChapterBookDetails';

export const TheChapterGridItem = ({title, paragraph}: TheChapterGridItemProps) => {
    return (
        <Grid item lg={6} md={12} sm={12} xs={12}>
            <StyledBox>
                <HeadingH5>{title}</HeadingH5>
                <Paragraph sx={{mt:'14px', textAlign:'justify'}}>{paragraph}</Paragraph>
                <Grid container mt='25px'>
                    <Grid item md={6} sm={6}>
                        <TheChapterBookDetails
                            title={'Pages:'}
                            paragraph={'85 pages'}
                        />
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <TheChapterBookDetails 
                            title={'Length:'}
                            paragraph={'1 h 15 mins'}
                        />
                    </Grid>
                </Grid>
            </StyledBox>
        </Grid>
    );
}

type TheChapterGridItemProps = {
    title: string;
    paragraph: string;
};

const StyledBox = styled(Box)`
    padding: 30px;
    background-color: ${WHITE};
    filter: drop-shadow(0 35px 25px rgba(4, 11, 20, 0.05));
`;