import { CommonHero } from "../../shared/components"
import { AuthorsBooks } from "./components/AuthorsBooks"
import { ReadFreeChapterSection } from "./components/ReadFreeChapterSection"

export const MyStore = () => {
    return (
        <main>
            <CommonHero
                title='My Store'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <AuthorsBooks />
            <ReadFreeChapterSection />
        </main>
    )
}