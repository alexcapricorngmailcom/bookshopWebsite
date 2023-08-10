import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';

import { ReactComponent as QuoteIcon } from './assets/quoteIcon.svg'
import { MAIN, WHITE } from '../colors';
import { Paragraph } from '../typography';

export const Quote = ({children}:QuoteProps) => {
    return (
        <StyledStack>
            <StyledQuoteIcon />
            <Paragraph sx={{padding:'40px 110px', color: WHITE}}>
                {children}
            </Paragraph>
        </StyledStack>
    );
}

type QuoteProps = {
    children: ReactNode,
}

const StyledStack = styled(Stack)`
    position: relative;
    width: 100%;
    border-radius: 5px;
    text-align: center;
    background-color: ${MAIN};
`;

const StyledQuoteIcon = styled(QuoteIcon)`
    position: absolute;
    top: 0;
    left: 25px;
`;
