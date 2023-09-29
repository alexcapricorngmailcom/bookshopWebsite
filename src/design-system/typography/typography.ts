import { styled } from "@mui/material/styles"
import { MAIN, PARAGRAPH_PRIMARY } from "../colors";

export const HeadingH1 = styled('h1')`
    font-family: Cardo, serif;
    font-size: 60px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.015em;
    color: ${MAIN};

    @media (max-width: 899px) {
        font-size: 56px;
    }
`;

export const HeadingH2 = styled('h2')`
    font-family: Cardo, serif;
    font-size: 55px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.015em;
    color: ${MAIN};
`;

export const HeadingH3 = styled('h3')`
    font-family: Cardo, serif;
    font-size: 45px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.015em;
    color: ${MAIN};
`;

export const HeadingH4 = styled('h4')`
    font-family: Cardo, serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.015em;
    color: ${MAIN};
`;

export const HeadingH5 = styled('h5')`
    font-family: Cardo, serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.015em;
    color: ${MAIN};
`;

export const HeadingH6 = styled('h6')`
    font-family: Cardo, serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.015em;
    color: ${MAIN};
`;

export const Paragraph = styled('p')`
    font-family: Inter, sans-serif;
    font-size: 19px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: -0.01em;
    color: ${PARAGRAPH_PRIMARY};
`;