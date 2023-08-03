import { Hero } from './components/Hero'
import { AboutTheAuthor } from './components/AboutTheAuthor'
import { MyStory } from './components/MyStory'
import { AuthorsBookIncludesSection } from './components/AuthorsBookIncludesSection'
import { TrustedByTheBest } from '../Home/components/TrustedByTheBest'
import { ReadFreeChapterSection } from './components/ReadFreeChapterSection'

export const About = () => {
    return (
        <main>
            <Hero />
            <AboutTheAuthor />
            <MyStory />
            <AuthorsBookIncludesSection />
            <TrustedByTheBest />
            <ReadFreeChapterSection />
        </main>
    )
}