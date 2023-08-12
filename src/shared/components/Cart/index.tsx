import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';

import atomicOneCart from "../../assets/img/atomicOneCart.png";
import { HeadingH2, HeadingH5, Paragraph } from "../../../design-system/typography";
import { MAIN, SECONDARY, WHITE } from "../../../design-system/colors";

export const Cart = () => {
    return (
        <>
        <StyledStack>
            <StyledHeadingH2>Your Cart</StyledHeadingH2>
            <CloseIcon fontSize="large" sx={{color: MAIN}}/>
        </StyledStack>
        <StyledStack sx={{padding: '0px 70px', mt:'65px', backgroundColor: WHITE}}>
            <Box>
                <Stack flexDirection='row'>
                    <Box>
                        <img src={atomicOneCart} alt="atomic one's cover" />
                    </Box>
                    <Box>
                        <Stack sx={{ml:'40px'}}>
                            <Box>
                                <HeadingH5>Atomic One’s</HeadingH5>
                                <Paragraph>$24.99</Paragraph>
                            </Box>
                            <Box>
                                <HeadingH5>Remove</HeadingH5>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>

            </Box>
        </StyledStack>
        </>
        
    );
}

const StyledStack = styled(Stack)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 35px 70px;
    background-color: ${SECONDARY};
`;

const StyledHeadingH2 = styled(HeadingH2)`
    font-size: 50px;
`;

