import { CommonHero } from '../../shared/components'
import { AboutTheAuthor } from './components/AboutTheAuthor'
import { MyStory } from './components/MyStory'
import { AuthorsBookIncludesSection } from './components/AuthorsBookIncludesSection'
import { TrustedByTheBest } from '../Home/components/TrustedByTheBest'
import { ReadFreeChapterSection } from './components/ReadFreeChapterSection'

export const About = () => {
    return (
        <main>
            <CommonHero
                title='About the Author'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <AboutTheAuthor />
            <MyStory />
            <AuthorsBookIncludesSection />
            <TrustedByTheBest />
            <ReadFreeChapterSection />
        </main>
    )
}