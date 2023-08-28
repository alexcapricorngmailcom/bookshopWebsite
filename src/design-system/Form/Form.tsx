import { useState } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import userIcon from './assets/user.svg'
import emailIcon from './assets/mail.svg'
import phoneIcon from './assets/phone.svg'
import textareaIcon from './assets/edit.svg'
import { Paragraph } from '../typography';
import { BLACK } from '../colors';
import { ButtonAction } from '../Button';

const defaultformValue = {
    name: '',
    email: '',
    phone: '',
    message: '',
    offers: false
}

export const Form = () => {
    
    const [userContactData, setUserContactData] = useState(defaultformValue);

    function checkHandler() {
        setUserContactData((prevState) => ({...prevState, offers: !prevState.offers}))
    }

    function mySubmitFunction(event:any) {
        event.preventDefault();
        setUserContactData(defaultformValue);
    }

    const changeState = (value:string, key:string) => {
        setUserContactData(prev => ({...prev, [key]: value}))
    }

    return (
        <form onSubmit={mySubmitFunction}>
            <Stack>
                <Stack flexDirection='row'>
                    <Box position='relative'>
                        <StyledInput 
                            type="text"
                            name='name'
                            placeholder='Name'
                            value={userContactData.name}
                            onChange={event => changeState(event.target.value, 'name')}
                            required
                        />
                        <StyledImg src={emailIcon} alt="email icon" />
                    </Box>
                    <Box sx={{position:'relative', ml:'10px'}}>
                        <StyledInput 
                            type="email" 
                            placeholder='Email'
                            value={userContactData.email}
                            onChange={event => setUserContactData((prev) => ({...prev, email: event.target.value}))}
                        />
                        <StyledImg src={userIcon} alt="user icon" />
                    </Box>
                </Stack>
                <Box sx={{position:'relative', mt:'10px'}}>
                    <StyledInput 
                        type="tel"
                        pattern='[0-9]{10}'
                        placeholder='Phone'
                        value={userContactData.phone}
                        onChange={event => setUserContactData((prev) => ({...prev, phone: event.target.value}))}
                    />
                    <StyledImg src={phoneIcon} alt="phone icon" />
                </Box>
                <Box sx={{position:'relative', mt:'10px'}}>
                    <StyledTextArea 
                        cols={1} 
                        rows={6} 
                        placeholder='Message'
                        value={userContactData.message}
                        onChange={event => setUserContactData((prev) => ({...prev, message: event.target.value}))}
                    >
                    </StyledTextArea>
                    <StyledImg src={textareaIcon} alt="textarea icon" />
                </Box>
                <Stack flexDirection='row' alignItems='center' mt='10px'>
                    <FormControlLabel checked={userContactData.offers} onChange={checkHandler} control={<StyledCheckbox />} label={<Paragraph sx={{mt:'3px'}}>Keep me up to date with news and offers by email</Paragraph>} />
                </Stack>
                <Box sx={{mt:'15px'}}>
                    <ButtonAction size='large' width='100%' type='submit'>Send Message</ButtonAction>
                </Box>
            </Stack>
        </form>
    );
}

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

const StyledTextArea = styled('textarea')`
    width: 100%;
    padding: 15px 15px 15px 60px;
    border: 1px solid #DCE1E9;
    resize: none;
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

const StyledCheckbox = styled(Checkbox)`
    color: #969AA0;

    &.Mui-checked {
        color: #969AA0
    }
`;