import { CommonHero } from "../../shared/components"
import { SignificantReading } from "./components/SignificantReading"
import { useLocation } from "react-router-dom"

import mockedDataArticles from "../../mockedDataArticles.json"

export const SingleArticle = () => {
    
    const location = useLocation()
    const locationId = location.pathname.split('/')[3];
    const filtredMockedDataArticles = mockedDataArticles.articlesItems.filter(item => item.id === locationId)[0];
    
    return (
        <main>
            <CommonHero
                title={filtredMockedDataArticles.title}
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <SignificantReading /> 
        </main>
    )
}