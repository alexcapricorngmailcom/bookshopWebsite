import { styled } from "@mui/material/styles"

export const HEADING_H1 = styled('h1')`
    font-family: Cardo, serif;
    font-size: 64px;
    font-weight: 700;
    /* line-height: 84px; */
    letter-spacing: -0.015em;
    @media (max-width: 900px) {
        font-size: 56px;
    }
    @media (max-width: 600px) {
        font-size: 48px;
    }
`;

export const HEADING_H2 = styled('h2')`
    font-family: Cardo, serif;
    font-size: 55px;
    font-weight: 700;
    /* line-height: 71px; */
    letter-spacing: -0.015em;
`;

export const HEADING_H3 = styled('h3')`
    font-family: Cardo, serif;
    font-size: 45px;
    font-weight: 700;
    /* line-height: 58px; */
    letter-spacing: -0.015em;
`;

export const HEADING_H4 = styled('h4')`
    font-family: Cardo, serif;
    font-size: 32px;
    font-weight: 700;
    /* line-height: 42px; */
    letter-spacing: -0.015em;
`;

export const HEADING_H5 = styled('h5')`
    font-family: Cardo, serif;
    font-size: 24px;
    font-weight: 700;
    /* line-height: 31px; */
    letter-spacing: -0.015em;
`;

export const HEADING_H6 = styled('h6')`
    font-family: Cardo, serif;
    font-size: 22px;
    font-weight: 700;
    /* line-height: 29px; */
    letter-spacing: -0.015em;
`;

export const PARAGRAPH = styled('p')`
    font-family: Inter, sans-serif;
    font-size: 19px;
    font-weight: 400;
    /* line-height: 32px; */
    letter-spacing: -0.01em;
`;
