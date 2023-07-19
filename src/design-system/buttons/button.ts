import { styled } from "@mui/material/styles"
import { SECONDARY, WHITE } from "../colors";

export const BUTTON = styled('button')`
    width: 220px;
    height: 65px;
    padding: 10px;
    border: 1px solid ${SECONDARY};
    background-color: ${SECONDARY};
    cursor: pointer;

    font-family: Cardo;
    font-size: 19px;
    font-weight: 700;
    /* line-height: 24px; */
    letter-spacing: 0.02em;
    text-align: center;
    color: #1B3764;
    
    &:hover, &:active {
        border: 1px solid ${WHITE};
        background-color: ${WHITE};
        transition: 0.2s;
    }
`;