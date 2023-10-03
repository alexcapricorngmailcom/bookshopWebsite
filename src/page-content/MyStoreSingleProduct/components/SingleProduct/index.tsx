import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import mockedDataProducts from '../../../../mockedDataProducts.json'
import { BACKGROUND, MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH4, Paragraph } from '../../../../design-system/typography';
import { ButtonAction } from '../../../../design-system/Button';
import { useState } from 'react';
import { cartSlice } from '../../../../redux/slices/cartSlice';

export const SingleProduct = () => {
    
    const location = useLocation();
    const locationId = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

    const filteredMockedDataProducts = mockedDataProducts.storeItems.filter(item => (item.id === locationId))[0];

    const [textFieldValue, setTextFieldValue] = useState(1);

    const dispatch = useDispatch();

    const cartItem = {
        id: filteredMockedDataProducts.id,
        myStoreImgSrc: filteredMockedDataProducts.myStoreImgSrc,
        myStoreAlt: filteredMockedDataProducts.myStoreAlt,
        title: filteredMockedDataProducts.title,
        price: filteredMockedDataProducts.price,
        isPositionedIcon: filteredMockedDataProducts.isPositionedIcon,
        positionedIconSrc: filteredMockedDataProducts.positionedIconSrc,
        positionedIconAlt: filteredMockedDataProducts.positionedIconAlt,
        quantity: textFieldValue
    };

    function customSubmit(event:any) {
        event.preventDefault();
        dispatch(cartSlice.actions.addItem(cartItem));
    }

    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack alignItems='center'>
                    <Grid container spacing={11} alignItems='center'>
                        <StyledGridItem1 item lg={5} md={12} sm={12}>
                            <StyledStackImg>
                                <StyledBoxBookCoverImg>
                                    <img src={filteredMockedDataProducts.myStoreSingleProductImgSrc} style={{width:'100%', height:'100%', objectFit:'cover'}} alt={filteredMockedDataProducts.myStoreAlt} />
                                </StyledBoxBookCoverImg>
                                {
                                    filteredMockedDataProducts.isPositionedIcon 
                                    && 
                                    <StyledBoxBookIcon>
                                        <img src={filteredMockedDataProducts.positionedIconSrc} style={{width:'100%', height:'100%', objectFit:'cover'}} alt={filteredMockedDataProducts.positionedIconAlt} />
                                    </StyledBoxBookIcon>
                                }
                            </StyledStackImg>
                        </StyledGridItem1>
                        <StyledGridItem2 item lg={7} md={12} sm={12}>
                            <StyledHeadingH4>{filteredMockedDataProducts.title}</StyledHeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>${filteredMockedDataProducts.price}</StyledParagraph>
                            <Paragraph sx={{mt:'10px', textAlign:'justify'}}>{filteredMockedDataProducts.singleDescription}</Paragraph>
                            <Stack flexDirection='row' sx={{mt:'20px'}}>
                                <StyledBox>
                                    <Paragraph>Publisher:</Paragraph>
                                    <Paragraph>Language:</Paragraph>
                                    { filteredMockedDataProducts.isAudio 
                                        ? 
                                        <>
                                            <Paragraph>Type:</Paragraph>
                                            <Paragraph>Length:</Paragraph>
                                            <Paragraph>Format:</Paragraph>
                                        </>
                                        : filteredMockedDataProducts.isDVD 
                                        ? 
                                        <>
                                            <Paragraph>Type:</Paragraph>
                                            <Paragraph>Paperback / Length:</Paragraph>
                                            <Paragraph>Dimensions:</Paragraph>
                                        </>
                                        :
                                        <>
                                            <Paragraph>Type:</Paragraph>
                                            <Paragraph>Paperback:</Paragraph>
                                            <Paragraph>Dimensions:</Paragraph>
                                        </>
                                    }
                                </StyledBox>
                                <StyledBox sx={{ml:'30px'}}>
                                    <Paragraph>{filteredMockedDataProducts.publisher}</Paragraph>
                                    <Paragraph>{filteredMockedDataProducts.language}</Paragraph>
                                    <Paragraph>{filteredMockedDataProducts.type}</Paragraph>
                                    { filteredMockedDataProducts.isAudio 
                                        ? 
                                        <>
                                            <Paragraph>{filteredMockedDataProducts.length}</Paragraph>
                                            <Paragraph>{filteredMockedDataProducts.format}</Paragraph>
                                        </>
                                        : filteredMockedDataProducts.isDVD 
                                        ? 
                                        <>
                                            <Paragraph>{filteredMockedDataProducts.paperback} + {filteredMockedDataProducts.length} {filteredMockedDataProducts.format}</Paragraph>
                                            <Paragraph>{filteredMockedDataProducts.dimensions}</Paragraph>
                                        </>
                                        :
                                        <>
                                            <Paragraph>{filteredMockedDataProducts.paperback}</Paragraph>
                                            <Paragraph>{filteredMockedDataProducts.dimensions}</Paragraph>
                                        </> 
                                    }   
                                </StyledBox>
                            </Stack>
                            <Box component='form' onSubmit={customSubmit} sx={{mt:'30px'}}>
                                <Stack flexDirection='row' justifyContent='space-between' width='100%'>
                                    <Box width='20%'>
                                        <StyledTextField
                                            id="outlined-number"
                                            type="number"
                                            defaultValue={textFieldValue}
                                            onChange={event => setTextFieldValue(Number(event.target.value))}
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
                                    <Box width='77%'>
                                        <ButtonAction type='submit' size='large' width='100%' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                                    </Box>
                                </Stack>
                            </Box>
                        </StyledGridItem2>
                    </Grid>
                    <Grid container spacing={11} sx={{mt:'32px'}}>
                        <Grid item lg={6}>
                            <HeadingH4 sx={{textAlign:'center'}}>Do you offer discounts for education?</HeadingH4>
                            <Paragraph sx={{mt:'10px', textAlign:'justify'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomized words which don't look even slightly believable.</Paragraph>                
                        </Grid>
                        <Grid item lg={6}>
                            <HeadingH4 sx={{textAlign:'center'}}>Is this book for me?</HeadingH4>
                            <Paragraph sx={{mt:'10px', textAlign:'justify'}}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</Paragraph>                       
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
`;

const StyledStackImg = styled(Stack)`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px 20px;
    background-color: ${BACKGROUND};
`;

const StyledBoxBookCoverImg = styled(Box)`
    padding: 26.5px 0px; 
    filter: drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1));
`;

const StyledHeadingH4 = styled(HeadingH4)`
    @media (max-width: 1199px) {
        /* text-align: center; */
    }
`;

const StyledParagraph = styled(Paragraph)`
    display: block;
    font-size: 30px;
    font-weight: 700;
    color: ${SECONDARY};

    @media (max-width: 1199px) {
        /* text-align: center; */
    }
`;

const StyledBox = styled(Box)`
    p + p {
        margin-top: 10px;
    }
`;

const StyledGridItem1 = styled(Grid)`
    @media (max-width: 1199px) {
        max-width: 500px;
        margin: 0 auto;
    }
    @media (max-width: 899px) {
        max-width: 430px;
    }
`;

const StyledGridItem2 = styled(Grid)`
    @media (max-width: 1199px) {

        max-width: 800px;
        margin: 0 auto;
    }
    
    @media (max-width: 899px) {
        max-width: 750px;
    }

    @media (max-width: 694px) {
        max-width: 100%;
    }
    
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

const StyledBoxBookIcon = styled(Box)`
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 100px; 
    height: 100px;

    @media (max-width: 1199px) {
        width: 80px; 
        height: 80px;
    }
`;