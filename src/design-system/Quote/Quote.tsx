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
            <StyledParagraph>
                {children}
            </StyledParagraph>
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

const StyledParagraph = styled(Paragraph)`
    padding: 40px 110px;
    color: WHITE;

    @media (max-width: 599px) {
        padding: 40px 80px;
    }
`;

const StyledQuoteIcon = styled(QuoteIcon)`
    position: absolute;
    top: 0;
    left: 3%;
`;
