import { styled } from "@mui/material/styles";
import { SECONDARY } from '../../colors'

export const CircleSmall = styled('div')`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${SECONDARY};
`;

export const CircleMedium = styled('div')`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${SECONDARY};
`;

export const CircleLarge = styled('div')`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${SECONDARY};
`;