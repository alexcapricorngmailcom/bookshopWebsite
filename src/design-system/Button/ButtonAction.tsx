import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ButtonAction = ({children}:ButtonActionProps) => {
    return (
        <StyledButton variant='contained'>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled(Button)`
    font-size: 20px;
`;

type ButtonActionProps = {
    children: ReactNode
}