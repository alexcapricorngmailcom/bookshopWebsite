import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { WHITE } from '../../../../design-system/colors';
import { Article } from '../../../../shared/components/Article/Article';

import mockedDataArticles from '../../../../mockedDataArticles.json'

export const Blog = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledStackList>
                    {mockedDataArticles.articlesItems.map(article => (
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
    padding-top: 145px;
    padding-bottom: 145px;
    background-color: ${WHITE};
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