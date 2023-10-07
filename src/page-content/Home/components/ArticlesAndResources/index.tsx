import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import mockedDataArticles from '../../../../mockedDataArticles.json'
import { BACKGROUND } from '../../../../design-system/colors';
import { Article } from '../../../../shared/components/Article/Article';
import { HeadingH3 } from '../../../../design-system/typography';
import { LineLarge } from '../../../../design-system/geometry/lines';


export const ArticlesAndResources = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <Stack flexDirection='column' alignItems='center'>
                    <HeadingH3 sx={{textAlign:'center'}}>Articles & Resources</HeadingH3>
                    <LineLarge sx={{mt:'25px'}} />
                </Stack>
                <StyledStackList sx={{mt:'22px'}}>
                    {mockedDataArticles.articlesItems.map( (article, index) => {
                        
                        if (index > 2) {
                            return <div key={article.id}></div>
                        }

                        return (
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
                            )
                    })
                    }
                </StyledStackList>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled('section')`
    padding: 145px 0px;
    background-color: ${BACKGROUND};

    @media (max-width: 1199px) {
        padding: 125px 0px;
    }

    @media (max-width: 599px) {
        padding: 85px 0px;
    }
`;

const StyledStackList = styled(Stack)`
    flex-direction: row;
    flex-wrap: wrap; 
    margin: -20px;
    justify-content: center;

    @media (max-width: 899px) {
        margin: 20px 0px 0px;
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