import { useLocation } from 'react-router-dom';
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
import { PositionedIcon } from '../../../../shared/components';


// TODO what are hell is going on with space under the pictures (switch off padding in StyledBoxBookCoverImg for demonstration)
// TODO discuss Continue shopping button. it disabled

// TODO check Paperback / Length

export const SingleProduct = () => {
    
    const location = useLocation();
    const locationId = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

    const filteredMockedDataProducts = mockedDataProducts.storeItems.filter(item => (item.id === locationId))[0];

    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack alignItems='center'>
                    <Grid container spacing={11} alignItems='center'>
                        <Grid item lg={5}>
                            <StyledStackImg>
                                <StyledBoxBookCoverImg>
                                    <img src={filteredMockedDataProducts.myStoreSingleProductImgSrc} alt={filteredMockedDataProducts.myStoreAlt} />
                                </StyledBoxBookCoverImg>
                                {filteredMockedDataProducts.isPositionedIcon && <PositionedIcon width='100px' height='100px' src={filteredMockedDataProducts.positionedIconSrc} alt={filteredMockedDataProducts.positionedIconAlt} />}
                            </StyledStackImg>
                        </Grid>
                        <Grid item lg={7}>
                            <HeadingH4>{filteredMockedDataProducts.title}</HeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>{filteredMockedDataProducts.price}</StyledParagraph>
                            <Paragraph sx={{mt:'10px'}}>{filteredMockedDataProducts.singleDescription}</Paragraph>
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
                            <Box component='form' sx={{mt:'30px'}}>
                                <Stack flexDirection='row' justifyContent='space-between' width='100%'>
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
                                    <Box width='77%'>
                                        <ButtonAction size='large' width='100%' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    {/* <Box sx={{mt:'30px'}}>
                        <ButtonAction size='medium' width='490px'>Continue shopping</ButtonAction>
                    </Box> */}
                    <Grid container spacing={11} sx={{mt:'32px'}}>
                        <Grid item lg={6}>
                            <HeadingH4 sx={{textAlign:'center'}}>Do you offer discounts for education?</HeadingH4>
                            <Paragraph sx={{mt:'10px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomized words which don't look even slightly believable.</Paragraph>                
                        </Grid>
                        <Grid item lg={6}>
                            <HeadingH4 sx={{textAlign:'center'}}>Is this book for me?</HeadingH4>
                            <Paragraph sx={{mt:'10px'}}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</Paragraph>                       
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
    background-color: ${BACKGROUND};
`;

const StyledBoxBookCoverImg = styled(Box)`
    padding: 26.5px 0px; 
    filter: drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1));
`;

const StyledParagraph = styled(Paragraph)`
    display: inline-block;
    font-size: 30px;
    font-weight: 700;
    color: ${SECONDARY};
`;

const StyledBox = styled(Box)`
    p + p {
        margin-top: 10px;
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