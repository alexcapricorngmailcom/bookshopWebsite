import Stack from "@mui/material/Stack";
import { WHITE } from "../../../design-system/colors";
import { CircleSmall } from "../../../design-system/geometry/circles";
import { HeadingH5, Paragraph } from "../../../design-system/typography";


export const BookDetails = ({title, paragraph}: BookDetailsProps) => {
    return (
        <>
            <Stack flexDirection='row' alignItems='center'>
                <CircleSmall />
                <HeadingH5 sx={{marginLeft: '13px'}}> 
                    {title}
                </HeadingH5>
            </Stack>
            <Paragraph sx={{paddingLeft: '29px'}}>
                {paragraph}
            </Paragraph>
        </>
    );
}

type BookDetailsProps = {
    title: string;
    paragraph: string;
};