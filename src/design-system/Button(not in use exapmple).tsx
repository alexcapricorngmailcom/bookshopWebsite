import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { MAIN, SECONDARY, WHITE } from './colors/colors'

export const ButtonAction = ({ size, onClick, outlined, children }: ButtonActionProps) => {
    return (
        <StyledButton 
            outlined={outlined ? 'outlined' : undefined} 
            size={size}
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

    /* text-decoration: underline;
    text-underline-offset: 10px; */

    background-color: ${props => (props.outlined ? 'transparent' : SECONDARY)};
    border: 1px solid ${props => (props.outlined ? SECONDARY : 'transparent')};

    color: ${props => (props.outlined ? SECONDARY : MAIN )};

    &:hover, &:active {
        
    }
`;

type ButtonActionProps = {
    size: 'small' | 'large';
    onClick: () => void;
    outlined?: boolean;
    children: ReactNode;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    outlined: string | undefined;
    size: string | undefined;
}