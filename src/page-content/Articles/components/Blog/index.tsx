import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { BACKGROUND, SECONDARY, WHITE } from '../../../../design-system/colors';
import { Article } from '../../../../shared/components/Article/Article';
import articlesAndResourcesImg1 from '../../../Home/components/ArticlesAndResources/assets/articlesAndResourcesImg1.png'

export const Blog = () => {
    return (
        <StyledSection>
            <Container maxWidth='lg'>
                <StyledStackList>
                    <StyledBoxListColumn>
                        <Article
                            title='The energy efficiency offers hydrotherapy or swim'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={articlesAndResourcesImg1}
                            alt='blog image 1'
                        />
                    </StyledBoxListColumn>
                    <StyledBoxListColumn>
                        <Article
                            title='The energy efficiency offers hydrotherapy or swim'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={articlesAndResourcesImg1}
                            alt='blog image 1'
                        />
                    </StyledBoxListColumn>
                    <StyledBoxListColumn>
                        <Article
                            title='The energy efficiency offers hydrotherapy or swim'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={articlesAndResourcesImg1}
                            alt='blog image 1'
                        />
                    </StyledBoxListColumn>
                    <StyledBoxListColumn>
                        <Article
                            title='The energy efficiency offers hydrotherapy or swim'
                            paragraph='The point of using Lorem hiter of that using making it look like others readable will get end.'
                            author='Author - 23.05.2022'
                            img={articlesAndResourcesImg1}
                            alt='blog image 1'
                        />
                    </StyledBoxListColumn>
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