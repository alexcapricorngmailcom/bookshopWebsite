import { styled } from "@mui/material/styles"
import { colors } from "../../../../const/colors";


export const MainButton = () => {
    return (
        <Button style={{backgroundColor: colors.secondary}}>Order Today</Button>
    )
}

const Button = styled('button')`
    padding: 1.25em 3.3em;
    border: none;
    font-family: Cardo;
    font-size: 19px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #1B3764;
    cursor: pointer;
`;