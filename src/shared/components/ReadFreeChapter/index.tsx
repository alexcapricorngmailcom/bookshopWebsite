import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { MAIN, SECONDARY, BLACK } from '../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../design-system/typography';
import { LineLarge } from '../../../design-system/geometry/lines';
import { ButtonAction } from '../../../design-system/Button';

const defaultformValue = '';

export const ReadFreeChapter = () => {

    const [userEmailValue, setUserEmailValue] = useState(defaultformValue);

    function customSubmit(event:any) {
        event.preventDefault();
        setUserEmailValue(defaultformValue);
    }

    return (
            <Container maxWidth='lg'>
                <StyledBox>
                    <Stack flexDirection='column' alignItems='center'>
                        <HeadingH3 sx={{textAlign:'center'}}>Read a free chapter</HeadingH3>
                        <LineLarge sx={{mt:'22px', backgroundColor: MAIN}} />
                        <Paragraph sx={{mt:'22px', textAlign:'center', color: MAIN}}>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</Paragraph>
                        <StyledInputForm onSubmit={customSubmit}>
                            <StyledInput 
                                type="email"
                                name='email'
                                placeholder='Your Email id...'
                                value={userEmailValue}
                                onChange={event => (setUserEmailValue(event.target.value))}
                                required
                            />
                            <StyledButtonBox>
                                <ButtonAction size='medium' type='submit'>Subscribe</ButtonAction> 
                            </StyledButtonBox>
                        </StyledInputForm>
                    </Stack>
                </StyledBox>
            </Container>
    );
}

const StyledBox = styled(Box)`
    padding: 120px 230px;
    background-color: ${SECONDARY};

    @media (max-width: 1199px) {
        padding: 120px 140px;
    }

    @media (max-width: 899px) {
        padding: 120px 45px;
    }

    @media (max-width: 599px) {
        padding: 120px 30px;
    }
`;

const StyledInputForm = styled('form')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;

    @media (max-width: 1199px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledInput = styled('input')`
    width: 63%;
    height: 65px;
    border: none;
    padding: 10px 20px;

    font-family: Inter, sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: -0.01em;
    color: ${BLACK};

    &::placeholder {
        color: #969AA0;
    }

    @media (max-width: 1199px) {
        width: 75%;
    }
    @media (max-width: 599px) {
        width: 100%;
    }
`;

const StyledButtonBox = styled(Box)`
    margin-left: 10px;

    @media (max-width: 1199px) {
        margin-left: 0px;
        margin-top: 20px;
    }
`;