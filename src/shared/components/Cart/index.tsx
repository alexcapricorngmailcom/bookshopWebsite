import { useSelector } from "react-redux";
import { getCartItems } from "../../../redux/selectors";
import { cartItemType } from "../../../types/cartItem";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

import { PositionedIcon } from '../../../shared/components';
import { HeadingH2, HeadingH5, Paragraph } from "../../../design-system/typography";
import { BACKGROUND, MAIN, SECONDARY, WHITE } from "../../../design-system/colors";
import { LineLarge } from "../../../design-system/geometry/lines";
import { ButtonAction } from "../../../design-system/Button";

export const Cart = ({handleClose}:any) => {
    
    const cartItems: cartItemType[] = useSelector(getCartItems);
    console.log(cartItems);

    let subTotal = 0;
    
    cartItems.map(cartItem => (
        subTotal = (Math.round( subTotal * 100 ) + Math.round( cartItem.price * 100 ))/100
    ))

    return (
        <div>
            <StyledStack>
                <StyledHeadingH2>Your Cart</StyledHeadingH2>
                    <Button onClick={handleClose}>
                        <CloseIcon fontSize="large" sx={{color: MAIN}} />
                    </Button>
            </StyledStack>
            {cartItems.map(cartItem => (
                <div key={cartItem.id}>
                    <StyledStack sx={{p: '0px 70px', mt:'65px', backgroundColor: WHITE}}>
                    <Box>
                        <Stack flexDirection='row'>
                            <StyledStackImg>
                                <StyledBoxBookCoverImg>
                                    <img src={cartItem.myStoreImgSrc} style={{width: '100%', height: '100%'}} alt={cartItem.myStoreAlt} />
                                </StyledBoxBookCoverImg>
                                {/* {cartItem.isPositionedIcon && <PositionedIcon src={cartItem.positionedIconSrc} width="50px" height="50px" alt={cartItem.positionedIconAlt} />} */}
                            </StyledStackImg>
                            <Box>
                                <Stack height='100%' justifyContent='space-between' sx={{ml:'40px'}}>
                                    <Box>
                                        <HeadingH5>{cartItem.title}</HeadingH5>
                                        <Paragraph>${cartItem.price}</Paragraph>
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
                            defaultValue={cartItem.quantity}
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
                </div>
                ))
            }
            <StyledStack sx={{mt:'25px', padding: '0px 70px', backgroundColor: WHITE}} >
                <HeadingH5>Sub-Total</HeadingH5>
                <Paragraph sx={{fontSize:'20px', fontWeight:'700', color: MAIN}}>${subTotal}</Paragraph>
            </StyledStack>
            <Box sx={{mt:'60px', mb:'60px', padding: '0px 70px', backgroundColor: WHITE}}>
                <ButtonAction size='large' width="100%">Continue to Checkout</ButtonAction>
            </Box>
        </div>
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

const StyledStackImg = styled(Stack)`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 173px;
    height: 218px;
    background-color: ${BACKGROUND};
`;

const StyledBoxBookCoverImg = styled(Box)`
    width: 133px;
    height: 178px;
    filter: drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1));
`;