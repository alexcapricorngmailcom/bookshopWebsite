import { styled } from '@mui/material/styles';

import { MAIN } from '../../colors';
import { Paragraph } from '../../typography';
import { ReactNode } from 'react';

const people = [
    '1',
    '2',
    '3'
];

const listItems = people.map(person =>
    <li>{person}</li>
);

export const UnorderedList = ({children}:UnorderedListProps) => {
    return (
        <ul>
            <li><Paragraph sx={{color: MAIN}}>{children}</Paragraph></li>
            <li><Paragraph sx={{color: MAIN}}>{children}</Paragraph></li>
            <li><Paragraph sx={{color: MAIN}}>{children}</Paragraph></li>
            <li><Paragraph sx={{color: MAIN}}>{children}</Paragraph></li>
        </ul>
    );
}

type UnorderedListProps = {
    children: ReactNode;
}