import { styled } from "@mui/material/styles"
import { SECONDARY } from "../colors/";


export const MainButton = () => {
    return (
        <Button style={{backgroundColor: SECONDARY}}>Order Today</Button>
    )
}

const Button = styled('button')`
    width: 13em;
    height: 4em;
    border: none;
    cursor: pointer;

    font-family: Cardo;
    font-size: 19px;
    font-weight: 700;
    text-align: center;
    color:#1B3764;
`;