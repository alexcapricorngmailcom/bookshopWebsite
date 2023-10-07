import { styled } from '@mui/material/styles';

import { WHITE } from '../../../../design-system/colors';
import { ReadFreeChapter } from '../../../../shared/components';
import { LegacyRef } from 'react';

export const ReadFreeChapterSection = ({readFreeDemo}:{readFreeDemo?: LegacyRef<HTMLElement>}) => {
    return (
        <StyledSection ref={readFreeDemo}>
           <ReadFreeChapter />
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;