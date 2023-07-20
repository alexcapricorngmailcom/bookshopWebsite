import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { MAIN, SECONDARY, WHITE } from '../colors'

// TODO rewrite to styled mui button with 3 variants

export const ButtonAction = ({ size, borderWidth, onClick, outlined, children }: ButtonActionProps) => {
    return (
    <StyledButton 
        outlined={outlined ? 'outlined' : undefined} 
        size={size} 
        borderwidth={borderWidth ? 'borderwidth' : undefined} 
        onClick={onClick}>
        {children}
    </StyledButton>
    );
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

    /* TODO do it only for text buttons or better use separate prop for it! */
    text-decoration: underline;
    text-underline-offset: 10px;

    background-color: ${props => (props.outlined ? 'transparent' : SECONDARY)};
    border: 1px solid ${props => (props.outlined ? SECONDARY : 'transparent')};
    border-width: ${props => (props.borderwidth ?  '0px' : '1px')};
    color: ${props => (props.outlined ? WHITE : MAIN )};

    &:hover, &:active {
        background-color: ${props => (props.outlined ? 'transparent' : WHITE)};
        border: 1px solid ${props => (props.outlined ? 'none' : WHITE)};
        color: ${props => (props.outlined ? SECONDARY : MAIN )};
    }
`;

type ButtonActionProps = {
    size: 'small' | 'large';
    borderWidth?: boolean; 
    onClick: () => void;
    outlined?: boolean;
    children: ReactNode;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    outlined: string | undefined;
    size: string | undefined;
    borderwidth: string | undefined;
}