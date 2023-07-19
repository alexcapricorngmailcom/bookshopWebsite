import { styled } from "@mui/material/styles"
import { SECONDARY, WHITE } from "../colors";
import { BUTTON } from "./button";

export const LARGE_BUTTON_OUTLINED = styled(BUTTON)`
    width: 300px;

    border: 1px solid ${SECONDARY};
    background-color: ${WHITE};
    
    &:hover, &:active {
        border-color: ${SECONDARY};
        background-color: ${SECONDARY};
        transition: 0.2s;
    }
`;