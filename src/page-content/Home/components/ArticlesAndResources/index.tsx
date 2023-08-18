import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { BACKGROUND } from '../../../../design-system/colors';
import { Article } from '../../../../shared/components/Article/Article';

import mockedDataArticles from '../../../../mockedDataArticles.json'
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';

export const ArticlesAndResources = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3>Articles & Resources</HeadingH3>
                    <LineLarge sx={{mt:'22px'}} />
                </Stack>
                <StyledStackList>
                    {mockedDataArticles.articlesItems.map( (article, index) => {
                        
                        if(index > 2) {
                            return <></>
                        }

                        return (
                            <StyledBoxListColumn sx={{mt:'50px'}}>
                                <Article
                                    title={article.title}
                                    paragraph={article.description}
                                    author={article.date}
                                    img={article.mainImgSrc}
                                    alt={article.mainImgAlt}
                                />
                            </StyledBoxListColumn>
                            )
                    }   )
                    
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