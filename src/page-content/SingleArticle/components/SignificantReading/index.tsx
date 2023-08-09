import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import significantReading from './assets/significantReading.png'
import { WHITE } from '../../../../design-system/colors';
import { HeadingH4, HeadingH5, Paragraph } from '../../../../design-system/typography';
import { UnorderedList } from '../../../../design-system/List';

export const SignificantReading = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <article>
                    <Box sx={{width:'100%'}}>
                        <img src={significantReading} style={{width:'100%', height:'100%', objectFit:'contain'}} alt="" />
                    </Box>
                    <HeadingH5 sx={{mt:'15px'}}>October 6, 2021 / Classics</HeadingH5>
                    <Paragraph sx={{mt:'30px'}}>There are many variations of passages of Lorem Ipsum available, but the major it have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, need to be sure there isn't anything embarrassing hidden in the middle of text. All thLorem Ipsum generators on the Internet tend.</Paragraph>
                    <HeadingH4 sx={{mt:'40px'}}>The perfect book for all</HeadingH4>
                    <Paragraph sx={{mt:'30px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.</Paragraph>
                    <UnorderedList>111</UnorderedList>
                </article>
            </Container>
        </StyledSection>
                
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
`;