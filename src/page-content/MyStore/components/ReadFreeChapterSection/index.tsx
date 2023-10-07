import { styled } from '@mui/material/styles';

import { WHITE } from '../../../../design-system/colors';
import { ReadFreeChapter } from '../../../../shared/components';



export const ReadFreeChapterSection = () => {
    return (
        <StyledSection>
           <ReadFreeChapter />
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-bottom: 145px;
    background-color: ${WHITE};

    @media (max-width: 1199px) {
        padding-bottom: 125px;
    }

    @media (max-width: 599px) {
        padding-bottom: 85px;
    }
`;