import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const PositionedIcon = ({width='80px', height='80px', src, alt}:PositionedIconProps) => {
    return(
        <StyledBoxBookIcon width={width} height={height}>
            <img src={src} style={{width:'100%', height:'100%', objectFit:'cover'}} alt={alt} />
        </StyledBoxBookIcon>
    )
}

type PositionedIconProps = {
    src: string | undefined
    alt: string | undefined
    width?: string | undefined
    height?: string | undefined
}

const StyledBoxBookIcon = styled(Box)`
    position: absolute;
    right: 10px;
    bottom: 10px;
`;
