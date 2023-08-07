import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import atomicOneSmall from '../../../../shared/assets/img/atomicOneSmall.png'
import theDarkLightSmall from '../../../../shared/assets/img/theDarkLightSmall.png'
import audioImg from '../../../../shared/assets/img/audioImg.png'

import { BACKGROUND, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH4, Paragraph } from '../../../../design-system/typography';
import { BookDetails } from '../../../../shared/components';
import { ButtonAction } from '../../../../design-system/Button';


export const AuthorsBooks = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledStackList>
                    <StyledBoxListColumn>
                        <Box>
                            <StyledStackImg>
                                <StyledBoxImg>
                                    <img src={atomicOneSmall} alt="" />
                                </StyledBoxImg>
                            </StyledStackImg>
                            <HeadingH4 sx={{mt:'20px'}}>Atomic One’s</HeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>$24.99</StyledParagraph>
                            <Paragraph sx={{mt:'10px'}}>Many variations of passages of Lorem willing araise alteration in some form.</Paragraph>
                            <Box sx={{mt:'20px'}}>
                                <BookDetails title='Printed Book'/>
                            </Box>
                            <Box sx={{mt:'30px'}}>
                                <ButtonAction variant='outlined' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                            </Box>
                        </Box>
                    </StyledBoxListColumn>
                    
                    <StyledBoxListColumn>
                        <Box>
                            <StyledStackImg>
                                <StyledBoxImg>
                                    <img src={atomicOneSmall} alt="" />
                                </StyledBoxImg>
                            </StyledStackImg>
                            <HeadingH4 sx={{mt:'20px'}}>Atomic One’s (Audio)</HeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>$14.99</StyledParagraph>
                            <Paragraph sx={{mt:'10px'}}>Many variations of passages of Lorem willing araise alteration in some form.</Paragraph>
                            <Box sx={{mt:'20px'}}>
                                <BookDetails title='Audiobook'/>
                            </Box>
                            <Box sx={{mt:'30px'}}>
                                <ButtonAction variant='outlined' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                            </Box>
                        </Box>
                    </StyledBoxListColumn>
                    
                    <StyledBoxListColumn>
                        <Box>
                            <StyledStackImg>
                                <StyledBoxImg>
                                    <img src={atomicOneSmall} alt="" />
                                </StyledBoxImg>
                            </StyledStackImg>
                            <HeadingH4 sx={{mt:'20px'}}>Atomic One’s + DVD</HeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>$34.99</StyledParagraph>
                            <Paragraph sx={{mt:'10px'}}>Many variations of passages of Lorem willing araise alteration in some form.</Paragraph>
                            <Box sx={{mt:'20px'}}>
                                <BookDetails title='Printed Book + Audiobook'/>
                            </Box>
                            <Box sx={{mt:'30px'}}>
                                <ButtonAction variant='outlined' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                            </Box>
                        </Box>
                    </StyledBoxListColumn>

                    <StyledBoxListColumn>
                        <Box>
                            <StyledStackImg>
                                <StyledBoxImg>
                                    <img src={theDarkLightSmall} alt="" />
                                </StyledBoxImg>
                            </StyledStackImg>
                            <HeadingH4 sx={{mt:'20px'}}>The Dark Light</HeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>$24.99</StyledParagraph>
                            <Paragraph sx={{mt:'10px'}}>Many variations of passages of Lorem willing araise alteration in some form.</Paragraph>
                            <Box sx={{mt:'20px'}}>
                                <BookDetails title='Printed Book'/>
                            </Box>
                            <Box sx={{mt:'30px'}}>
                                <ButtonAction variant='outlined' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                            </Box>
                        </Box>
                    </StyledBoxListColumn>
                    
                    <StyledBoxListColumn>
                        <Box>
                            <StyledStackImg>
                                <StyledBoxImg>
                                    <img src={theDarkLightSmall} alt="" />
                                </StyledBoxImg>
                            </StyledStackImg>
                            <HeadingH4 sx={{mt:'20px'}}>The Dark Light (Audio)</HeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>$14.99</StyledParagraph>
                            <Paragraph sx={{mt:'10px'}}>Many variations of passages of Lorem willing araise alteration in some form.</Paragraph>
                            <Box sx={{mt:'20px'}}>
                                <BookDetails title='Audiobook'/>
                            </Box>
                            <Box sx={{mt:'30px'}}>
                                <ButtonAction variant='outlined' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                            </Box>
                        </Box>
                    </StyledBoxListColumn>
                    
                    <StyledBoxListColumn>
                        <Box>
                            <StyledStackImg>
                                <StyledBoxImg>
                                    <img src={theDarkLightSmall} alt="" />
                                    <Box sx={{position:'absolute', top: '0', left:'0'}}>
                                        <img src={audioImg} alt="" />
                                    </Box>
                                </StyledBoxImg>
                            </StyledStackImg>
                            <HeadingH4 sx={{mt:'20px'}}>The Dark Light + DVD</HeadingH4>
                            <StyledParagraph sx={{mt:'10px'}}>$34.99</StyledParagraph>
                            <Paragraph sx={{mt:'10px'}}>Many variations of passages of Lorem willing araise alteration in some form.</Paragraph>
                            <Box sx={{mt:'20px'}}>
                                <BookDetails title='Printed Book + Audiobook'/>
                            </Box>
                            <Box sx={{mt:'30px'}}>
                                <ButtonAction variant='outlined' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                            </Box>
                        </Box>
                    </StyledBoxListColumn>
                    
                </StyledStackList>

            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 150px;
    padding-bottom: 150px;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${BACKGROUND};
`;

const StyledBoxImg = styled(Box)`
    position: relative;
    padding: 28.65px 0px; 
    filter: drop-shadow(0 20px 25px rgba(4, 11, 20, 0.1));
`;

const StyledParagraph = styled(Stack)`
    font-size: 22px;
    font-weight: 700;
    color: ${SECONDARY};
`;

