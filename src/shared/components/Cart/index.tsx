import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../../redux/selectors";
import { CartItemType } from "../../../types/cartItem";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

import { HeadingH5, Paragraph } from "../../../design-system/typography";
import { BACKGROUND, MAIN, SECONDARY } from "../../../design-system/colors";
import { LineLarge } from "../../../design-system/geometry/lines";
import { cartSlice } from "../../../redux/slices/cartSlice";

export const Cart = () => {
    
    const cartItems: CartItemType[] = useSelector(getCartItems);

    const dispatch = useDispatch();

    const getCartItemId = (id:string) => {
        dispatch(cartSlice.actions.removeItem(id));
    }

    const changeCartItemQuantity = (cartItem:CartItemType, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const dataObj = {
            id: cartItem.id,
            myStoreImgSrc: cartItem.myStoreImgSrc,
            myStoreAlt: cartItem.myStoreAlt,
            title: cartItem.title,
            price: cartItem.price,
            isPositionedIcon: cartItem.isPositionedIcon,
            positionedIconSrc: cartItem.positionedIconSrc,
            positionedIconAlt: cartItem.positionedIconAlt,
            quantity: Number(event.target.value)
        }
        dispatch(cartSlice.actions.updateItemQuantity(dataObj));
    }

    return (
        <div>
            {cartItems.map(cartItem => (
                <div key={cartItem.id}>
                    <StyledStack>
                        <StyledStackImg flexShrink='0'>
                            <StyledBoxBookCoverImg>
                                <img src={cartItem.myStoreImgSrc} style={{width: '100%', height: '100%'}} alt={cartItem.myStoreAlt} />
                            </StyledBoxBookCoverImg>
                            {   
                                cartItem.isPositionedIcon 
                                && 
                                <StyledBoxBookIcon width='50px' height='50px'>
                                    <img src={cartItem.positionedIconSrc} style={{width:'100%', height:'100%', objectFit:'cover'}} alt={cartItem.positionedIconAlt} />
                                </StyledBoxBookIcon>
                            }
                        </StyledStackImg>
                        <StyledStackDescription>
                            <Box>
                                <HeadingH5>{cartItem.title}</HeadingH5>
                                <Paragraph>${cartItem.price}</Paragraph>
                            </Box>
                            <SlyledBox>
                                <StyledTextField
                                    id="outlined-number"
                                    type="number"
                                    defaultValue={cartItem.quantity}
                                    onChange={event => changeCartItemQuantity(cartItem, event)}
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
                            </SlyledBox>
                            <StyledButton onClick={() => getCartItemId(cartItem.id)}>
                                <HeadingH5>Remove</HeadingH5>
                            </StyledButton>
                        </StyledStackDescription>
                    </StyledStack>
                    <LineLarge sx={{width:'100%', mt:'25px', backgroundColor: BACKGROUND}}/>
                </div>
                ))
            }
        </div>
    );
}

const StyledStack = styled(Stack)`
    flex-direction: row;
    margin-top: 25px;

    @media (max-width: 599px) {
        flex-direction: column;
        align-items: center;
    }
`;

const SlyledBox = styled(Box)`
    margin: 0 calc(100% - 80px);

    @media (max-width: 599px) {
        flex-direction: column;
        margin: 0 calc(100% - 80px);
    }
`;

const StyledTextField = styled(TextField)`
    width: 80px;

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

const StyledStackDescription = styled(Stack)`
    justify-content: space-between;
    width: 100%;  
    margin-left: 40px;

    @media (max-width: 599px) {
        margin-top: 25px;
        margin-left: 0px;
    }
`;


const StyledBoxBookCoverImg = styled(Box)`
    width: 133px;
    height: 178px;
    filter: drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1));
`;

const StyledBoxBookIcon = styled(Box)`
    position: absolute;
    right: 10px;
    bottom: 10px;
`;

const StyledButton = styled(Button)`
    justify-content: flex-start;
    max-width: max-content;
    padding: 0px;
    text-transform: none;
    border-radius: 0px;
`;

