import { styled } from "@mui/material/styles";
import { SECONDARY, WHITE } from '../../colors'

export const SquareSmall = styled('div')`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${WHITE};
`;

export const SquareSmallOutlined = styled('div')`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid ${SECONDARY};
`;

export const SquareMedium = styled('div')`
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${SECONDARY};
`;

export const SquareLarge = styled('div')`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${SECONDARY};
`;