import { CommonHero } from "../../shared/components"
import { SignificantReading } from "./components/SignificantReading"

export const SingleArticle = () => {
    return (
        <main>
            <CommonHero
                title='Significant reading has more info number'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <SignificantReading /> 
        </main>
    )
}