import { styled } from '@mui/material/styles';

import { WHITE } from '../../../../design-system/colors';
import { AuthorsBookIncludes } from '../../../../shared/components';


export const AuthorsBookIncludesSection = () => {
    return (
        <StyledSection>
            <AuthorsBookIncludes />
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
`;