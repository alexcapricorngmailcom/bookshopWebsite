import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import mockedDataProducts from '../../../../mockedDataProducts.json';
import { BACKGROUND, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH4, Paragraph } from '../../../../design-system/typography';
import { BookDetails, PositionedIcon } from '../../../../shared/components';
import { ButtonAction } from '../../../../design-system/Button';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../../redux/slices/cartSlice';

// TODO what are hell is going on with space under the pictures (switch off padding in StyledBoxBookCoverImg for demonstration)

export const AuthorsBooks = () => {
    
    const dispatch = useDispatch();

    const getCartItem = (store: any) => {
        const cartItem = {
            id: store.id,
            title: store.title,
            price: store.price,
            myStoreImgSrc: store.myStoreImgSrc,
            myStoreAlt: store.myStoreAlt,
            quantity: 1
        };
        dispatch(cartSlice.actions.addItem(cartItem));
    }

    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledStackList>
                    {mockedDataProducts.storeItems.map(store => (
                        <StyledBoxListColumn key={store.id}>
                            <RouterLink to={`/myStore/singleProduct/${store.id}`}>
                                <StyledStackImg>
                                    <StyledBoxBookCoverImg>
                                        <img src={store.myStoreImgSrc} alt={store.myStoreAlt} />
                                    </StyledBoxBookCoverImg>
                                    {store.isPositionedIcon && <PositionedIcon src={store.positionedIconSrc} alt={store.positionedIconAlt} />}
                                </StyledStackImg>
                            </RouterLink>
                            <HeadingH4 sx={{mt:'20px'}}>{store.title}</HeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>{store.price}</StyledParagraph>
                            <Paragraph sx={{mt:'10px'}}>{store.mainDescription}</Paragraph>
                            <Box sx={{mt:'20px'}}>
                                <BookDetails title={store.type} />
                            </Box>
                            <Box sx={{mt:'30px'}}>
                                <ButtonAction onClick={() => getCartItem(store)} variant='outlined' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                            </Box>
                        </StyledBoxListColumn>
                        ))
                    }
                </StyledStackList>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
`;

const StyledStackList = styled(Stack)`
    flex-direction: row;
    flex-wrap: wrap; 
    margin: -20px;
`;

const StyledBoxListColumn = styled(Box)`
    width: calc(100%/3);
    padding: 20px;
`;

const StyledStackImg = styled(Stack)`
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: ${BACKGROUND};
`;

const StyledBoxBookCoverImg = styled(Box)`
    padding: 28.65px 0px; 
    filter: drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1));
`;

const StyledParagraph = styled(Paragraph)`
    font-size: 22px;
    font-weight: 700;
    color: ${SECONDARY};
`;