import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { HeadingH6, Paragraph } from '../../../../../design-system/typography';
import { SECONDARY } from '../../../../../design-system/colors';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    
    borderBottom: `1px solid #969AA0`,
    backgroundColor: 'transparent',
    padding: '15px 0px',

    '&:last-child': {
      borderBottom: 0,
    },

    '@media (max-width: 899px)': {
        '&:last-child': {
            borderBottom: '1px solid #969AA0',
        },
    },
    
    '&:before': {
      display: 'none',
    },

    '& .MuiAccordionSummary-root': {
        padding: '0px',
    }

  }));


export const AccordionItem = ({title}:AccordionItemProps) => {
    return (
        <Accordion>
            <StyledAccordionSummary
                expandIcon={<FiberManualRecordIcon fontSize='inherit' sx={{color: SECONDARY}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <StyledHeadingH6 sx={{ml:'16px'}}>{title}</StyledHeadingH6>
            </StyledAccordionSummary>
            <AccordionDetails sx={{padding: 0}}>
                <Paragraph sx={{pl:'32px', textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Paragraph>
                <Paragraph sx={{pl:'32px', textAlign:'justify'}}>There are many variations of of Lorem Ipsum available.</Paragraph>
            </AccordionDetails>
        </Accordion>
    );
}

const StyledAccordionSummary = styled(AccordionSummary)`
    flex-direction: row-reverse;
`;

const StyledHeadingH6 = styled(HeadingH6)`
    @media (max-width: 949px) {
        font-size: 20px;
    }

    @media (max-width: 899px) {
        font-size: 22px;
    }
`;

type AccordionItemProps = {
    title: string | undefined;
}