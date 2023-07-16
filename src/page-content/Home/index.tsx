import { styled } from "@mui/material/styles"
import { colors } from "../../const/colors"

export const Home = () => {
    return (
        <main style={{color: colors.secondary}}>
            <Test>Im tomato</Test>
            Home</main>
    )
}

const Test = styled('div')`
    color: tomato;
`;

