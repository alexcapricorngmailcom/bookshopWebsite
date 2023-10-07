import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import mockedDataProducts from '../../../../mockedDataProducts.json';
import { BACKGROUND, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH4, Paragraph } from '../../../../design-system/typography';
import { BookDetails} from '../../../../shared/components';
import { ButtonAction } from '../../../../design-system/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../../../redux/slices/cartSlice';
import { StoreItemType } from '../../../../types/storeItem';
import { getCartItems } from '../../../../redux/selectors';
import { CartItemType } from '../../../../types/cartItem';

export const AuthorsBooks = () => {
    const cartItems: CartItemType[] = useSelector(getCartItems);
    
    const dispatch = useDispatch();

    const getCartItem = (store: StoreItemType) => {
        const cartItem = {
            id: store.id,
            myStoreImgSrc: store.myStoreImgSrc,
            myStoreAlt: store.myStoreAlt,
            title: store.title,
            price: store.price,
            isPositionedIcon: store.isPositionedIcon,
            positionedIconSrc: store.positionedIconSrc,
            positionedIconAlt: store.positionedIconAlt,
            quantity: 1
        };
        dispatch(cartSlice.actions.addItem(cartItem));
    }

    const compareId = (id:string) => {
        
        const coincidence = cartItems.find(item => item.id === id);
        
        return !!coincidence
    }

    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledStackList>
                    {mockedDataProducts.storeItems.map(store => (
                        <StyledStackListColumn key={store.id}>
                            <RouterLink to={`/myStore/singleProduct/${store.id}`}>
                                <StyledStackImg>
                                    <StyledBoxBookCoverImg>
                                        <img src={store.myStoreImgSrc} style={{width:'100%', height:'100%', objectFit:'cover'}} alt={store.myStoreAlt} />
                                    </StyledBoxBookCoverImg>
                                    {
                                        store.isPositionedIcon 
                                        &&
                                        <StyledBoxBookIcon >
                                            <img src={store.positionedIconSrc} style={{width:'100%', height:'100%', objectFit:'cover'}} alt={store.positionedIconAlt} />
                                        </StyledBoxBookIcon> 
                                    }
                                </StyledStackImg>
                            </RouterLink>
                            <HeadingH4 sx={{mt:'20px'}}>{store.title}</HeadingH4>
                            <StyledParagraphPrice sx={{mt:'10px'}}>${store.price}</StyledParagraphPrice>
                            <StyledParagraphDescription sx={{mt:'10px'}}>{store.mainDescription}</StyledParagraphDescription>
                            <Box sx={{mt:'20px'}}>
                                <BookDetails title={store.type} />
                            </Box>
                            {
                                compareId(store.id)
                                ?
                                <Box sx={{mt:'30px'}}>
                                    <ButtonAction startIcon={<ShoppingCartOutlinedIcon />} disabled>Already in Cart</ButtonAction>
                                </Box>
                                :
                                <Box sx={{mt:'30px'}}>
                                    <ButtonAction onClick={() => getCartItem(store)} variant='outlined' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                                </Box>
                            }
                        </StyledStackListColumn>
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

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 65px 0px;
    }
    
`;

const StyledStackList = styled(Stack)`
    flex-direction: row;
    flex-wrap: wrap; 
    margin: -20px;

    @media (max-width: 1199px) {
        justify-content: center;
    }

    @media (max-width: 599px) {
        margin: 0px;
    }
`;

const StyledStackListColumn = styled(Stack)`
    width: calc(100%/3);
    padding: 20px;
    
    @media (max-width: 1199px) {
        align-items: center;
        width: 430px;
    }

    @media (max-width: 599px) {
        width: 100%;
        align-items: center;
    }
`;

const StyledStackImg = styled(Stack)`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 20px;
    background-color: ${BACKGROUND};
`;

const StyledBoxBookCoverImg = styled(Box)`
    filter: drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1))
`;

const StyledParagraphPrice = styled(Paragraph)`
    font-size: 22px;
    font-weight: 700;
    color: ${SECONDARY};
`;

const StyledParagraphDescription = styled(Paragraph)`
    @media (max-width: 1199px) {
        text-align: center;
    }
`;

const StyledBoxBookIcon = styled(Box)`
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 80px; 
    height: 80px;
`;