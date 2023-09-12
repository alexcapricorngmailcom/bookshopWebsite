import { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Dialog, { DialogProps } from '@mui/material/Dialog';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { Cart } from '../../Cart';
import { getCartItems } from "../../../../redux/selectors";
import { cartItemType } from "../../../../types/cartItem";

export default function CartScrollDialog() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cartItems: cartItemType[] = useSelector(getCartItems);

  return (
    <div>
      <Button onClick={handleClickOpen('body')} >
        <StyledBadge badgeContent={cartItems.length}>
            <ShoppingCartOutlinedIcon sx={{color: WHITE}} />
        </StyledBadge>
      </Button>
      <StyledDialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        disableScrollLock
      >
        <DialogContent>
            <Cart handleClose={handleClose} />
        </DialogContent>
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

  .MuiDialogContent-root {
    padding: 0px;
  }
`;

