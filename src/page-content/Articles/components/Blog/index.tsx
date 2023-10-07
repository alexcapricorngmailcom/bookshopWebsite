import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import mockedDataArticles from '../../../../mockedDataArticles.json'
import { WHITE } from '../../../../design-system/colors';
import { Article } from '../../../../shared/components/Article/Article';

export const Blog = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledStackList>
                    {mockedDataArticles.articlesItems.map(article => (
                        <StyledStackListColumn key={article.id}>
                                <Article
                                    id={article.id}
                                    title={article.title}
                                    paragraph={article.description}
                                    author={article.date}
                                    img={article.articleImgSrc}
                                    alt={article.articleImgAlt}
                                />
                        </StyledStackListColumn>
                        ))
                    }
                </StyledStackList>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 65px 0px;
    }
`;

const StyledStackList = styled(Stack)`
    flex-direction: row;
    flex-wrap: wrap; 
    margin: -20px;
    justify-content: center;

    @media (max-width: 599px) {
        margin: 0px;
    }
`;

const StyledStackListColumn = styled(Stack)`
    width: calc(100%/3);
    padding: 20px;

    @media (max-width: 1199px) {
        align-items: center;
        width: 400px;
    }
/* 
    @media (max-width: 599px) {
        width: 100%;
        align-items: center;
        padding: 20px 20px;
    } */
`;