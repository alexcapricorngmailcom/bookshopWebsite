import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const PositionedIcon = ({src}:PositionedIconProps) => {
    return(
        <StyledBoxBookIcon>
            <img src={src} style={{width:'100%', height:'100%', objectFit:'cover'}} alt="audio icon" />
        </StyledBoxBookIcon>
    )
}

type PositionedIconProps = {
    src: string | undefined
    alt: string | undefined
}

const StyledBoxBookIcon = styled(Box)`
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 80px;
    height: 80px;
`;
