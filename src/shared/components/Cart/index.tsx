import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

import atomicOneCart from "../../assets/img/atomicOneCart.png";
import { HeadingH2, HeadingH5, Paragraph } from "../../../design-system/typography";
import { BACKGROUND, MAIN, SECONDARY, WHITE } from "../../../design-system/colors";
import { LineLarge } from "../../../design-system/geometry/lines";
import { ButtonAction } from "../../../design-system/Button";

export const Cart = ({closeModal}:any) => {

    return (
        <>
        <StyledStack>
            <StyledHeadingH2>Your Cart</StyledHeadingH2>
                <Button onClick={closeModal}>
                    <CloseIcon fontSize="large" sx={{color: MAIN}} />
                </Button>
        </StyledStack>
        <StyledStack sx={{alignItems: 'flex-start', padding: '0px 70px', mt:'65px', backgroundColor: WHITE}}>
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
            <Box width='20%'>
                <StyledTextField
                    id="outlined-number"
                    type="number"
                    defaultValue={1}
                    inputProps={{
                        min: 1,
                        style: { 
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '19px',
                            fontWeight: '500',
                            lineHeight: '170%',
                            letterSpacing: '-0.01em',
                            color: MAIN
                        }
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
        </StyledStack>
        <LineLarge sx={{width:'100%', mt:'65px', backgroundColor: BACKGROUND}}/>
        <StyledStack sx={{mt:'25px', padding: '0px 70px', backgroundColor: WHITE}} >
            <HeadingH5>Sub-Total</HeadingH5>
            <Paragraph sx={{fontSize:'20px', fontWeight:'700', color: MAIN}}>$24.99</Paragraph>
        </StyledStack>
        <Box sx={{mt:'60px', mb:'60px', padding: '0px 70px', backgroundColor: WHITE}}>
            <ButtonAction size='large' width="100%">Continue to Checkout</ButtonAction>
        </Box>
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


const StyledTextField = styled(TextField)`

    .MuiOutlinedInput-notchedOutline {
        border-radius: 0px;
        border: 1px solid ${SECONDARY};
    }

    .MuiOutlinedInput-root {
        height: 65px;

        &:hover fieldset {
            border-color: ${MAIN} ;
        }
    }
    
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${MAIN} !important;
    }
`;