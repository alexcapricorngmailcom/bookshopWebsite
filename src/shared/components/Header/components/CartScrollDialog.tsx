import { useState } from "react";
import { useSelector } from "react-redux";
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
import { HeadingH2, HeadingH5, Paragraph } from "../../../../design-system/typography";
import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { Cart } from '../../Cart';
import { getCartItems } from "../../../../redux/selectors";
import { cartItemType } from "../../../../types/cartItem";

export default function CartScrollDialog() {
  const cartItems: cartItemType[] = useSelector(getCartItems);

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

  return (
    <div>
      <Button onClick={handleOpen} >
        <StyledBadge badgeContent={getBadge()}>
            <ShoppingCartOutlinedIcon sx={{color: WHITE}} />
        </StyledBadge>
      </Button>
      <StyledDialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
      >
        <DialogTitle>
          <StyledStack sx={{p:'25px 70px'}}>
              <StyledHeadingH2>Your Cart</StyledHeadingH2>
                  <Button onClick={handleClose}>
                      <CloseIcon fontSize="large" sx={{color: MAIN}} />
                  </Button>
          </StyledStack>
        </DialogTitle>
          <DialogContent>
              <Cart />
          </DialogContent>
          <DialogActions>
            <StyledStack sx={{mt: '50px', backgroundColor: WHITE}} >
                  <HeadingH5>Sub-Total</HeadingH5>
                  <Paragraph sx={{fontSize:'20px', fontWeight:'700', color: MAIN}}>${getSubtotal()}</Paragraph>
            </StyledStack>
            <Box sx={{mt: '25px', mb: '60px', backgroundColor: WHITE}}>
                <ButtonAction size='large' width="100%">Continue to Checkout</ButtonAction>
            </Box>
          </DialogActions>
      </StyledDialog>
    </div>
  );
}

const StyledBadge = styled(Badge)`
    margin-Left: 30px;
    cursor: pointer;

    &:hover > .MuiBadge-badge  {
      background-color: ${WHITE};
    } 

    & .MuiBadge-badge {
      color: ${MAIN};
      background-color: ${SECONDARY};
      font-family: Inter, sans-serif;
      font-size: 11px;
      font-weight: 700;
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
    padding: 0px 70px;
  }

  .MuiDialogActions-root {
    padding: 0px 70px;
    flex-direction: column;
    align-items: unset;
  }

  .MuiDialogActions-root > :not(:first-of-type) {
    margin-left: 0px;
  }
`;

const StyledStack = styled(Stack)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${SECONDARY};
`;

const StyledHeadingH2 = styled(HeadingH2)`
    font-size: 50px;
`;

