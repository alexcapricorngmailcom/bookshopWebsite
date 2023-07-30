import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';
import { MAIN, SECONDARY } from '../colors';
import Box from '@mui/material/Box';

export const ButtonAction = ({variant = 'contained', children}:ButtonActionProps) => {
    return (
        <Box>
            <StyledButton variant={variant}>
                {children}
            </StyledButton>
        </Box>
    );
}

const StyledButton = styled(Button)<StyledButtonProps>`
    width: 200px;
    height: 65px;
    padding: 20px 10px;
    border-radius: 0;
    box-shadow: none;
    text-transform: none;
    font-family: Cardo, serif;
    font-size: 19px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.015em;

    background-color: ${props => (props.variant === 'contained' ? SECONDARY : MAIN )};

    color: ${props => (props.variant === 'contained' ? MAIN : SECONDARY )};
    
    /* color: ${MAIN};
    background-color: ${SECONDARY}; */


    &:hover, &:active {
        
    }
`;

type ButtonActionProps = {
    variant?: "text" | "outlined" | "contained";
    children: ReactNode;
}

interface StyledButtonProps extends ButtonProps {
    // variant?: "text" | "outlined" | "contained" | undefined;
}