import Stack from "@mui/material/Stack";

import { CircleSmall } from "../../../../../design-system/geometry/circles";
import { HeadingH5, Paragraph } from "../../../../../design-system/typography";

export const TheCapterBookDetails = ({title, paragraph}: BookDetailsProps) => {
    return (
        <>
            <Stack flexDirection='row' alignItems='center'>
                <CircleSmall />
                <HeadingH5 sx={{marginLeft: '13px'}}> 
                    {title}
                </HeadingH5>
                <Paragraph sx={{paddingLeft: '13px'}}>
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