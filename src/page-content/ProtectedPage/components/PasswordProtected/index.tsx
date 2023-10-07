import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import vector from './assets/vector.svg';
import { BACKGROUND, BLACK, WHITE } from '../../../../design-system/colors';
import { HeadingH3, Paragraph } from '../../../../design-system/typography';
import { ButtonAction } from '../../../../design-system/Button';
import { useState } from 'react';

const defaultPasswordValue = '';

export const PasswordProtected = () => {

    const [userPasswordData, setUserPasswordData] = useState(defaultPasswordValue);
    
    function customSubmit(event:any) {
        event.preventDefault();
        setUserPasswordData(defaultPasswordValue);
    }

    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack alignItems='center'>
                    <StyledStackItem>
                        <HeadingH3 sx={{textAlign:'center'}}>Password Protected</HeadingH3>
                        <Paragraph sx={{mt:'20px', textAlign:'center'}}>This page is password protected. If you are the website admin, or have access to this page, please type your password below.</Paragraph>
                        <StyledForm onSubmit={customSubmit}>
                            <Box position='relative'>
                                <StyledInput 
                                    type="password"
                                    name='name'
                                    placeholder='Enter your password'
                                    value={userPasswordData}
                                    onChange={event => setUserPasswordData(event.target.value)}
                                    required
                                />
                                <StyledImg src={vector} alt="password icon" />
                            </Box>
                            <Box sx={{mt:'20px'}}>
                                <ButtonAction size='large' width='100%' type='submit'>Submit</ButtonAction>
                            </Box>
                        </StyledForm>
                    </StyledStackItem>
                </Stack>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${WHITE};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledStackItem = styled(Stack)`
    align-items: center; 
    width: 850px; 
    padding: 120px 170px; 
    background-color: ${BACKGROUND};

    @media (max-width: 899px) {
        width: 100%;
        padding: 120px 150px;
    }

    @media (max-width: 799px) {
        width: 100%;
        padding: 120px 120px;
    }

    @media (max-width: 749px) {
        width: 100%;
        padding: 120px 100px;
    }

    @media (max-width: 649px) {
        width: 100%;
        padding: 100px 75px;
    }

    @media (max-width: 599px) {
        width: 100%;
        padding: 80px 20px;
    }
`;

const StyledForm = styled('form')`
    width: 100%;
    margin-top: 20px;
`;

const StyledInput = styled('input')`
    width: 100%;
    padding: 15px 15px 15px 60px;
    border: 1px solid #DCE1E9;
    font-family: Inter, sans-serif;
    font-size: 19px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: -0.01em;
    color: ${BLACK};

    &::placeholder {
        color: #969AA0;
    }
`;

const StyledImg = styled('img')`
    position: absolute;
    top: 20px;
    left: 20px;
`;