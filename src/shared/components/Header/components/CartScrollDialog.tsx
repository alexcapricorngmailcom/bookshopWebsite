import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { styled } from "@mui/material/styles";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { ButtonAction } from "../../../../design-system/Button";
import { HeadingH3, HeadingH5, Paragraph } from "../../../../design-system/typography";
import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { Cart } from '../../Cart';
import { getCartItems } from "../../../../redux/selectors";
import { CartItemType } from "../../../../types/cartItem";
import { cartSlice } from '../../../../redux/slices/cartSlice';

export default function CartScrollDialog() {
  const dispatch = useDispatch();

  const cartItems: CartItemType[] = useSelector(getCartItems);

  const getSubtotal = () => {
    let subtotal = 0;
    
    cartItems.map(cartItem => (
      subtotal = (Math.round( subtotal * 100 ) + Math.round( (cartItem.price * cartItem.quantity) * 100 ))/100
    ))
    return subtotal;
  }

  const getBadge = () => {
    let badge = 0;
    
    cartItems.map(cartItem => (
      badge = badge + cartItem.quantity
    ))
    return badge;
  } 
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  
  const clearCart = () => {
    dispatch(cartSlice.actions.clearCart());
    handleClose();
  }

  return (
    <div>
      <StyledButton onClick={handleOpen} >
        <StyledBadge badgeContent={getBadge()}>
            <StyledShoppingCartOutlinedIcon />
        </StyledBadge>
      </StyledButton>
      <StyledDialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
      >
        <DialogTitle>
          <StyledTitleStack>
              <StyledHeadingH3>Your Cart</StyledHeadingH3>
                  <Button onClick={handleClose}>
                      <CloseIcon fontSize="large" sx={{color: MAIN}} />
                  </Button>
          </StyledTitleStack>
        </DialogTitle>
          <DialogContent>
              <Cart />
          </DialogContent>
          <DialogActions>
            <StyledStack sx={{mt: '20px', backgroundColor: WHITE}} >
                  <HeadingH5>Sub-Total</HeadingH5>
                  <Paragraph sx={{fontSize:'20px', fontWeight:'700', color: MAIN}}>${getSubtotal()}</Paragraph>
            </StyledStack>
            <Box sx={{mt: '20px', mb: '25px', backgroundColor: WHITE}}>
                <ButtonAction onClick={clearCart} size='large' width="100%">Continue to Checkout</ButtonAction>
            </Box>
          </DialogActions>
      </StyledDialog>
    </div>
  );
}

const StyledButton = styled(Button)`
    margin-left: 30px;
    min-width: max-content;
    padding: 0px;
    border-radius: 0px;

    @media (max-width: 1199px) { 
      margin-left: 25px;
    }
`;

const StyledBadge = styled(Badge)`
    cursor: pointer;

    /* &:hover > .MuiBadge-badge  {
      background-color: ${WHITE};
    } */

    & .MuiBadge-badge {
      color: ${MAIN};
      background-color: ${SECONDARY};
      font-family: Inter, sans-serif;
      font-size: 11px;
      font-weight: 700;
    }
`;

const StyledShoppingCartOutlinedIcon = styled(ShoppingCartOutlinedIcon)`
    color: ${WHITE};

    &:hover {
      color: ${SECONDARY};
    }
`;

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    max-width: 800px;
    width: 800px;
    border-radius: 0px;
  }

  .MuiDialogTitle-root {
    padding: 0px;
  }

  .MuiDialogContent-root {
    padding: 0px 50px;

    @media (max-width: 899px) {
      padding: 0px 25px;
    }

    @media (max-height: 600px) {
      overflow-y: unset;
    }
  }

  .MuiDialogActions-root {
    padding: 0px 50px;
    flex-direction: column;
    align-items: unset;

    @media (max-width: 899px) {
      padding: 0px 25px;
    }
  }

  .MuiDialogActions-root > :not(:first-of-type) {
    margin-left: 0px;
  }
`;

const StyledTitleStack = styled(Stack)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background-color: ${SECONDARY};

    @media (max-width: 899px) {
      padding: 20px 25px;
    }
`;

const StyledHeadingH3 = styled(HeadingH3)`
    @media (max-width: 449px) {
      font-size: 40px;
    }
`;

const StyledStack = styled(Stack)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${SECONDARY};
`;
