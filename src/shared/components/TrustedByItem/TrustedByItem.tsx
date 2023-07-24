import { HeadingH5, Paragraph } from "../../../design-system/typography";

export const TrustedByItem = ({imgName, alt, title, paragraph}: BookDetailsProps) => {
    return (
        <>
            <img src={imgName} alt={alt} />
            <HeadingH5 sx={{marginTop: '20px'}}>{title}</HeadingH5>
            <Paragraph sx={{marginTop: '10px'}}>{paragraph}</Paragraph>
        </>
    );
}

type BookDetailsProps = {
    imgName: string;
    alt: string;
    title: string;
    paragraph: string;
};