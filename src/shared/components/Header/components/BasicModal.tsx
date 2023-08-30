import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { Cart } from '../../Cart';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  bgcolor: WHITE,
  outline: 'none',
  boxShadow: 24,
};

export function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <StyledBadge badgeContent={1} color='error'>
            <ShoppingCartOutlinedIcon sx={{color: WHITE}} />
        </StyledBadge>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock
      >
        <Box sx={style}>
          <Cart 
            closeModal={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
}

const StyledBadge = styled(Badge)`
    margin-Left: 30px;
    cursor: pointer;
    
    /* 
    & > :hover  {
      color: ${SECONDARY};
    } */

    &:hover > .MuiBadge-badge  {
      background-color: ${WHITE};
    } 

    & .MuiBadge-badge {
      color: ${MAIN};
      background-color: ${SECONDARY};
      font-family: Inter, sans-serif;
      font-size: 12px;
      font-weight: 700;
    }
`;

