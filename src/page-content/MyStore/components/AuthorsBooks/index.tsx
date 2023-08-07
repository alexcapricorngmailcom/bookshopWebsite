import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link as RouterLink } from 'react-router-dom'

import atomicOneSmall from '../../../../shared/assets/img/atomicOneSmall.png'
import theDarkLightSmall from '../../../../shared/assets/img/theDarkLightSmall.png'
import audioIcon from '../../../../shared/assets/img/audioIcon.png'
import dvdIcon from '../../../../shared/assets/img/dvdIcon.png'
import { BACKGROUND, SECONDARY, WHITE } from '../../../../design-system/colors';
import { HeadingH4, Paragraph } from '../../../../design-system/typography';
import { BookDetails } from '../../../../shared/components';
import { ButtonAction } from '../../../../design-system/Button';

// TODO what are hell is going on with space under the pictures (switch off padding in StyledBoxBookCoverImg for demonstration)

export const AuthorsBooks = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledStackList>
                    <StyledBoxListColumn>
                        <RouterLink to={'/storeItem1'}>
                            <StyledStackImg>
                                <StyledBoxBookCoverImg>
                                    <img src={atomicOneSmall} alt="atomic one’s book cover" />
                                </StyledBoxBookCoverImg>
                            </StyledStackImg>
                        </RouterLink>
                        <HeadingH4 sx={{mt:'20px'}}>Atomic One’s</HeadingH4>
                        <StyledParagraph sx={{mt:'10px'}}>$24.99</StyledParagraph>
                        <Paragraph sx={{mt:'10px'}}>Many variations of passages of Lorem willing araise alteration in some form.</Paragraph>
                        <Box sx={{mt:'20px'}}>
                            <BookDetails title='Printed Book'/>
                        </Box>
                        <Box sx={{mt:'30px'}}>
                            <ButtonAction variant='outlined' startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</ButtonAction>
                        </Box>
                    </StyledBoxListColumn>
                    
                    <StyledBoxListColumn>
                        <StyledStackImg>
                            <StyledBoxBookCoverImg>
                                <img src={atomicOneSmall} alt="atomic one’s book cover" />
                            </StyledBoxBookCoverImg>
                            <StyledBoxBookIcon>
                                <img src={audioIcon} style={{width:'100%', height:'100%', objectFit:'cover'}} alt="audio icon" />
                            </StyledBoxBookIcon>
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
                    </StyledBoxListColumn>
                    
                    <StyledBoxListColumn>
                        <StyledStackImg>
                            <StyledBoxBookCoverImg>
                                <img src={atomicOneSmall} alt="atomic one’s book cover" />
                            </StyledBoxBookCoverImg>
                            <StyledBoxBookIcon>
                                <img src={dvdIcon} style={{width:'100%', height:'100%', objectFit:'cover'}} alt="audio icon" />
                            </StyledBoxBookIcon>
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
                    </StyledBoxListColumn>

                    <StyledBoxListColumn>
                        <StyledStackImg>
                            <StyledBoxBookCoverImg>
                                <img src={theDarkLightSmall} alt="the dark light book cover" />
                            </StyledBoxBookCoverImg>
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
                    </StyledBoxListColumn>
                    
                    <StyledBoxListColumn>
                        <StyledStackImg>
                            <StyledBoxBookCoverImg>
                                <img src={theDarkLightSmall} alt="the dark light book cover" />
                            </StyledBoxBookCoverImg>
                            <StyledBoxBookIcon>
                                <img src={audioIcon} style={{width:'100%', height:'100%', objectFit:'cover'}} alt="audio icon" />
                            </StyledBoxBookIcon>
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
                    </StyledBoxListColumn>
                    
                    <StyledBoxListColumn>
                        <StyledStackImg>
                            <StyledBoxBookCoverImg>
                                <img src={theDarkLightSmall} alt="the dark light book cover" />
                            </StyledBoxBookCoverImg>
                            <StyledBoxBookIcon>
                                <img src={dvdIcon} style={{width:'100%', height:'100%', objectFit:'cover'}} alt="audio icon" />
                            </StyledBoxBookIcon>
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
                    </StyledBoxListColumn>
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

const StyledBoxBookIcon = styled(Box)`
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 80px;
    height: 80px;
`;

const StyledParagraph = styled(Stack)`
    font-size: 22px;
    font-weight: 700;
    color: ${SECONDARY};
`;