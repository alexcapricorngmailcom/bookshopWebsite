import { styled } from "@mui/material/styles"
import { SECONDARY, WHITE } from "../colors";
import { BUTTON } from "./button";

export const BUTTON_OUTLINED = styled(BUTTON)`
    border: 1px solid ${SECONDARY};
    background-color: ${WHITE};
    
    &:hover, &:active {
        border-color: ${SECONDARY};
        background-color: ${SECONDARY};
        transition: 0.2s;
    }
`;