import { styled } from '@mui/material/styles';

import { BACKGROUND } from '../../../../design-system/colors';
import { AuthorsBookIncludes } from '../../../../shared/components';


export const AuthorsBookIncludesSection = () => {
    return (
        <StyledSection>
            <AuthorsBookIncludes />
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${BACKGROUND};
`;