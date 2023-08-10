import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { HeadingH2 } from "../../../design-system/typography";
import { SECONDARY } from "../../../design-system/colors";



export const Cart = () => {
    return (
        <StyledBoxContainer>
            <Stack width='100%'>
                <StyledHeadingH2>Your Cart</StyledHeadingH2>
                        
            </Stack>
        </StyledBoxContainer>
    );
}

const StyledBoxContainer = styled(Box)`
    width: 100%;
`;

const StyledHeadingH2 = styled(HeadingH2)`
    font-size: 50px;
    padding: 35px 70px;
    background-color: ${SECONDARY};
`;

