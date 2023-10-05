import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';
import { MAIN, SECONDARY, WHITE } from '../colors';
import Box from '@mui/material/Box';

export const ButtonAction = ({size ='small', width, height = '65px', type, onClick, variant = 'contained', children, disabled, component, to, startIcon}:ButtonActionProps) => {
    return (
        <Box>
            <StyledButton
                disabled={disabled}
                size={size} 
                width={width} 
                height={height}
                type={type}
                onClick={onClick} 
                variant={variant} 
                component={component} 
                to={to} 
                startIcon={startIcon}>
                {children}
            </StyledButton>
        </Box>
    );
}

const StyledButton = styled(Button)<StyledButtonProps>`
    width: ${props => {
        if (props.size === 'small') return '220px';
        if (props.size === 'medium') return '250px';
        if (props.size === 'large') return '300px';
    }};
    width: ${props => (props.width)};
    height: ${props => (props.height)};
    padding: 10px;
    border-radius: 0;
    box-shadow: none;
    text-transform: none;
    font-family: Cardo, serif;
    font-size: 19px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.015em;

    // text
    color: ${props => (props.variant === 'text') ? WHITE : MAIN};

    // contained
    background-color: ${props => (props.variant === 'contained') ? SECONDARY : 'transparent'};

    // outlined
    border-color: ${props => {
        if (props.variant === 'outlined') {
            return SECONDARY;
        }
    }};

    //mixed contained/medium
    color: ${props => {
            if (props.variant === 'contained' && props.size === 'medium') return WHITE;
    }};

    background-color: ${props => {
            if (props.variant === 'contained' && props.size === 'medium') return MAIN;
    }};

    &:hover, &:active {

        // text
        color: ${props => {
            if (props.variant === 'text') {
                return SECONDARY;
            }
        }};

        // contained
        background-color: ${props => (props.variant === 'contained') ? WHITE : 'transparent'};

        box-shadow: ${props => { 
            if (props.variant === 'contained') return 'none'; 
        }};

        // contained
        background-color: ${props => {
            if (props.variant === 'outlined') return SECONDARY;
        }};

        border-color: ${props => {
            if (props.variant === 'outlined') return SECONDARY;
        }};

        //mixed contained/medium
        color: ${props => {
                if (props.variant === 'contained' && props.size === 'medium') return SECONDARY;
        }};

        background-color: ${props => {
                if (props.variant === 'contained' && props.size === 'medium') return MAIN;
        }};

        //mixed contained/large
        color: ${props => {
                if (props.variant === 'contained' && props.size === 'large') return WHITE;
        }};

        background-color: ${props => {
                if (props.variant === 'contained' && props.size === 'large') return MAIN;
        }};
    }   

`;

type ButtonActionProps = {
    size?: 'small' | 'medium' | 'large';
    width?: string | undefined;
    height?: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick?: () => void;
    variant?: "text" | "outlined" | "contained";
    children: ReactNode;
    component?: object | undefined;
    to?: string | undefined;
    startIcon?: any;
    disabled?: any
}

interface StyledButtonProps extends ButtonProps {
    width: string | undefined;
    height: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    component: object | undefined;
    to?: string | undefined;
    startIcon?: any;
    disabled?: any
}