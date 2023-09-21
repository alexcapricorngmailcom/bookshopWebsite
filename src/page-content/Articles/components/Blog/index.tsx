import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

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
                            <StyledBox>
                                <Article
                                    id={article.id}
                                    title={article.title}
                                    paragraph={article.description}
                                    author={article.date}
                                    img={article.articleImgSrc}
                                    alt={article.articleImgAlt}
                                />
                            </StyledBox>
                            
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
`;

const StyledStackList = styled(Stack)`
    flex-direction: row;
    flex-wrap: wrap; 
    margin: -20px;
    justify-content: center;

    @media (max-width: 899px) {
        margin: 0px;
    }
`;

const StyledStackListColumn = styled(Stack)`
    width: calc(100%/3);
    padding: 20px;
    align-items: center;


    @media (max-width: 1199px) {
        width: calc(100%/2);
    }

    @media (max-width: 899px) {
        width: calc(100%);
        padding: 20px 0px;
    }
`;

const StyledBox = styled(Box)`

    @media (max-width: 1199px) {
        width: 392px;
        height: 651px;
    }
`;

