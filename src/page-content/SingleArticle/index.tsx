import { CommonHero } from "../../shared/components"
import { SignificantReading } from "./components/SignificantReading"

export const SingleArticle = () => {
    return (
        <main>
            <CommonHero
                title='Articles'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <SignificantReading /> 
        </main>
    )
}