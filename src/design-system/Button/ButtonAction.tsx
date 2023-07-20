import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { MAIN, SECONDARY, WHITE } from '../colors'

export const ButtonAction = ({ size, borderwidth, onClick, outlined, children }: ButtonActionProps) => {
    return (
    <StyledButton 
        outlined={outlined ? 'outlined' : undefined} 
        size={size} 
        borderwidth={borderwidth ? 'borderwidth' : undefined} 
        onClick={onClick}>
    {children}
    </StyledButton>
    );
};

type ButtonActionProps = {
    size: 'small' | 'large';
    borderwidth?: boolean; 
    onClick?: () => void;
    outlined?: boolean;
    children: ReactNode;
};

const StyledButton = styled('button')<ButtonProps>`
    width: ${props => (props.size === 'small' ? '220px' : '300px')};
    height: 65px;
    padding: 10px;
    font-family: inherit;
    font-size: 19px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: center;
    transition: 0.2s;
    cursor: pointer;

    background-color: ${props => (props.outlined ? 'transparent' : SECONDARY)};
    border: 1px solid ${props => (props.outlined ? SECONDARY : 'transparent')};
    border-width: ${props => (props.borderwidth ? '0px' : '4px')};
    color: ${props => (props.outlined ? WHITE : MAIN )};

    &:hover, &:active {
        background-color: ${props => (props.outlined ? 'transparent' : WHITE)};
        border: 1px solid ${props => (props.outlined ? 'none' : WHITE)};
        color: ${props => (props.outlined ? SECONDARY : MAIN )};
    }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    outlined: string | undefined;
    size: string | undefined;
    borderwidth: string | undefined;
}