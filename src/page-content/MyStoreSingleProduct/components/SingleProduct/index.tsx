import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import atomicOneMedium from '../../../../shared/assets/img/atomicOneMedium.png'
import { BACKGROUND, MAIN, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH4, Paragraph } from '../../../../design-system/typography';
import { ButtonAction } from '../../../../design-system/Button';

// TODO what are hell is going on with space under the pictures (switch off padding in StyledBoxBookCoverImg for demonstration)
// TODO discuss Continue shopping button. it disabled

export const SingleProduct = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack alignItems='center'>
                    <Grid container spacing={11} alignItems='center'>
                        <Grid item lg={5}>
                            <StyledStackImg>
                                <StyledBoxBookCoverImg>
                                    <img src={atomicOneMedium} alt="atomic one’s book cover" />
                                </StyledBoxBookCoverImg>
                            </StyledStackImg>
                        </Grid>
                        <Grid item lg={7}>
                            <HeadingH4>The Atomic One’s</HeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>$24.99</StyledParagraph>
                            <Paragraph sx={{mt:'10px'}}>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.</Paragraph>
                            <Stack flexDirection='row' sx={{mt:'20px'}}>
                                <StyledBox>
                                    <Paragraph>Publisher:</Paragraph>
                                    <Paragraph>Language:</Paragraph>
                                    <Paragraph>Paperback:</Paragraph>
                                    <Paragraph>ISBN-10:</Paragraph>
                                    <Paragraph>Dimensions:</Paragraph>
                                </StyledBox>
                                <StyledBox sx={{ml:'40px'}}>
                                    <Paragraph>Learning Private Limited (1 January 2021)</Paragraph>
                                    <Paragraph>English</Paragraph>
                                    <Paragraph>212 pages</Paragraph>
                                    <Paragraph>9788120345799</Paragraph>
                                    <Paragraph>20 x 14 x 4 cm</Paragraph>
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
                            <Paragraph sx={{mt:'10px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable.</Paragraph>                
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

const StyledParagraph = styled(Stack)`
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

    .MuiOutlinedInput-root {
        height: 65px;

        &:hover fieldset {
            border-color: ${MAIN} ;
        }
    }

    .MuiOutlinedInput-notchedOutline {
        border-radius: 0px;
        border: 1px solid ${SECONDARY};
    }
    
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${MAIN} !important;
    }
`;