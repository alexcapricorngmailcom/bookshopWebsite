import { styled } from '@mui/material/styles';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { CircleSmall } from "../../../design-system/geometry/circles";
import { HeadingH5, Paragraph } from "../../../design-system/typography";

export const BookDetails = ({title, paragraph, color}: BookDetailsProps) => {
    return (
        <StyledBox>
            <Stack flexDirection='row' alignItems='center'>
                <CircleSmall />
                <HeadingH5 sx={{marginLeft: '13px', color:{color}}}> 
                    {title}
                </HeadingH5>
            </Stack>
            <Paragraph sx={{paddingLeft: '29px'}}>
                {paragraph}
            </Paragraph>
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    @media (max-width: 899px) {
        display: flex; 
        flex-direction: column; 
        align-items: center;
    }
`;

type BookDetailsProps = {
    title: string;
    paragraph?: string;
    color?: string;
};