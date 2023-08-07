import Stack from "@mui/material/Stack";

import { CircleSmall } from "../../../../../design-system/geometry/circles";
import { HeadingH5, Paragraph } from "../../../../../design-system/typography";

export const TheChapterBookDetails = ({title, paragraph}: BookDetailsProps) => {
    return (
        <>
            <Stack flexDirection='row' alignItems='center'>
                <CircleSmall />
                <HeadingH5 sx={{ml:'13px'}}> 
                    {title}
                </HeadingH5>
                <Paragraph sx={{ml:'13px'}}>
                    {paragraph}
                </Paragraph>
            </Stack>
            
        </>
    );
}

type BookDetailsProps = {
    title: string;
    paragraph: string;
};