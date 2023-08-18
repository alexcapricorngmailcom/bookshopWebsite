import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { BACKGROUND } from '../../../../design-system/colors';
import { Article } from '../../../../shared/components/Article/Article';

import mockedDataArticles from '../../../../mockedDataArticles.json'

const slicedMockedDataArticles = mockedDataArticles.articlesItems.slice(0,3);

export const ArticlesAndResources = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledStackList>
                    {slicedMockedDataArticles.map(article => (
                        <StyledBoxListColumn>
                            <Article
                                title={article.title}
                                paragraph={article.description}
                                author={article.date}
                                img={article.mainImgSrc}
                                alt={article.mainImgAlt}
                            />
                        </StyledBoxListColumn>
                        ))
                    }
                </StyledStackList>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${BACKGROUND};
`;

const StyledStackList = styled(Stack)`
    flex-direction: row;
    flex-wrap: wrap; 
    margin: -20px;
`;

const StyledBoxListColumn = styled(Box)`
    width: calc(100%/3);
    padding: 20px;
`;