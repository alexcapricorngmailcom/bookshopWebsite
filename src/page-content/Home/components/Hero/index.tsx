import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import theDarkLightLarge from '../../../../shared/assets//img/theDarkLightLarge.png';
import { MAIN, PARAGRAPH_SECONDARY, WHITE } from '../../../../design-system/colors'
import { HeadingH1, HeadingH5, Paragraph } from '../../../../design-system/typography'
import { LineSmall } from '../../../../design-system/geometry/lines'
import { BookDetails } from '../../../../shared/components/BookDetails';
import { ButtonAction } from '../../../../design-system/Button';

export enum ProcedureStatusUuid {
    OnshoreDraft = '89f1a721-d2d5-40dd-8764-aa844949257a',
    OnshoreDraft2 = 'eaa15a3b-00c9-4de2-84c7-80ac1baf9447',
    OffshoreDraft = '4507747a-6c3b-4698-ad0b-a7feb8d013b8',
    FinalApproved = 'd49c1d47-45df-4fed-b81e-4e8c3d018030',
    UnderApproval = 'acb889e7-a282-4756-9228-e9d9d1571a76',
    Completed = '2e008916-0212-41fa-8e20-50c134501598',
    Abandoned = '66d36d75-254f-4b12-8098-3ba9966df7b4',
    UnderExecution = '952e8d19-732e-4207-a93c-21bc5f4602fb',
    AAR = '0b93cc72-b362-4d98-af35-d854d672d4c8',
    PausedExecution = '9e70fd6d-f7b3-4865-b204-11b3ef842b73',
    Omitted = '062c3d1b-390e-4a56-ab51-06d981168f17',
}

const IntermediateStatuses = [
    {
     label: 'Onshore Draft',
     id: ProcedureStatusUuid.OnshoreDraft,
    },
    {
     label: 'Onshore Draft 2',
     id: ProcedureStatusUuid.OnshoreDraft2,
    },
    {
     label: 'Offshore Draft',
     id: ProcedureStatusUuid.OffshoreDraft,
    },
    {
     label: 'Under Approval',
     id: ProcedureStatusUuid.UnderApproval,
    },
    {
     label: 'Final Approved',
     id: ProcedureStatusUuid.FinalApproved,
    },
    {
     label: 'Under Execution',
     id: ProcedureStatusUuid.UnderExecution,
     subStatuses: [
      {
       label: 'Paused Execution',
       id: ProcedureStatusUuid.PausedExecution,
      },
     ],
    },
    { 
        label: 'AAR', 
        id: ProcedureStatusUuid.AAR 
    },
];
   
const FinishStatuses = [
    {
     label: 'Completed',
     id: ProcedureStatusUuid.Completed,
    },
    {
     label: 'Abandoned',
     id: ProcedureStatusUuid.Abandoned,
    },
    {
     label: 'Omitted',
     id: ProcedureStatusUuid.Omitted,
    },
];

const arr = IntermediateStatuses.concat(FinishStatuses);


function getProcedureStatusLabelByValue(value: ProcedureStatusUuid | string) {
    
    const newArr = arr.find((status:any) => (value === status.id || status.subStatuses?.find((substatus:any) => value === substatus.id ))

    );
    
    if (newArr?.subStatuses) {
        return newArr?.subStatuses.find((substatus:any) => value === substatus.id )?.label
    } else {
        return newArr?.label 
    }
    
}

console.log(getProcedureStatusLabelByValue('89f1a721-d2d5-40dd-8764-aa844949257a'))
console.log(getProcedureStatusLabelByValue('9e70fd6d-f7b3-4865-b204-11b3ef842b73'))
console.log(getProcedureStatusLabelByValue('062c3d1b-390e-4a56-ab51-06d981168f17'))




export const Hero = ({scrollOnClick}:{scrollOnClick: () => void}) => {

    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Grid container spacing={12} alignItems='center'>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <StyledStackHeadingH5 flexDirection='row' alignItems='center'>
                            <LineSmall />
                            <HeadingH5 sx={{ml:'15px', color: WHITE}}>Welcome to Pages</HeadingH5>
                        </StyledStackHeadingH5>
                        <StyledHeadingH1 sx={{mt:'16px', lineHeight: '110%', color: WHITE}}>Books are uniquely portable magic</StyledHeadingH1>
                        <StyledParagraph sx={{mt:'32px', textAlign:'justify', color: PARAGRAPH_SECONDARY}}>There are many variations of passages of Lorem available, but the majority have suffered alteration in some form.</StyledParagraph>
                        <StyledStackButton>
                            <ButtonAction component={RouterLink} to='/myStore'>Order Today</ButtonAction> 
                            <ButtonAction variant='text' onClick={scrollOnClick}><Box sx={{textDecorationLine:'underline', textUnderlineOffset: '7px'}}>Read Free Demo</Box></ButtonAction>
                        </StyledStackButton>
                        <StyledGridSubContainer container>
                            <StyledGridSubItem item lg={3.5} md={3.5} sm={3.5} xs={6}>
                                <BookDetails
                                    title='Pages:'
                                    paragraph='586 pages'
                                    color={WHITE}
                                />
                            </StyledGridSubItem>
                            <StyledGridSubItem item lg={3.5} md={3.5} sm={3.5} xs={6}>
                                <BookDetails 
                                    title='Length:'
                                    paragraph='10 hours'
                                    color={WHITE}
                                />
                            </StyledGridSubItem>
                            <StyledGridSubItem item lg={5} md={5} sm={5} xs={12}>
                                <BookDetails 
                                    title='Ratings:'
                                    paragraph='4.5/5 (305 ratings)'
                                    color={WHITE}
                                />
                            </StyledGridSubItem>
                        </StyledGridSubContainer>
                    </Grid>
                    <StyledGridItem2 item lg={6} md={12} sm={12} xs={12}>
                        <StyledImageBox>
                            <img src={theDarkLightLarge} style={{width: '100%', height: '100%'}} alt="the dark light book cover" />
                        </StyledImageBox>
                    </StyledGridItem2>
                </Grid>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled('section')`
    padding-top: 185px;
    padding-bottom: 125px;
    background-color: ${MAIN};
`;

const StyledStackHeadingH5 = styled(Stack)`
    @media (max-width: 599px) {
        justify-content: center;
    }
`;

const StyledStackButton = styled(Stack)`
    flex-direction: row;
    align-items: center; 
    margin-top: 50px;
    
    @media (max-width: 1199px) {
        justify-content: center;
    }
    @media (max-width: 499px) {
        flex-direction: column;

        & > :last-child {
            margin-top: 30px;
        }
    }
`;

const StyledHeadingH1 = styled(HeadingH1)`
    @media (max-width: 599px) {
        text-align: center;
    }
`;

const StyledParagraph = styled(Paragraph)`
    @media (max-width: 599px) {
        text-align: center;
    }
`;

const StyledGridSubContainer = styled(Grid)`
    margin-top: 50px;

    @media (max-width: 599px) {
        margin-top: 30px;

        & > :last-child {
            margin-top: 30px;
        }
    }
`;

const StyledGridSubItem = styled(Grid)`

    @media (max-width: 1199px) {
        text-align: center;
    }

    @media (max-width: 1199px) {
        & > div > div {
            justify-content: center;
        }
    }
`;

const StyledGridItem2 = styled(Grid)`
    @media (max-width: 1199px) {
        padding-top: 50px !important;
    }
`;
const StyledImageBox = styled(Box)`
    @media (max-width: 1199px) {
        max-width: 540px;
        margin: 0 auto;
    }
`;