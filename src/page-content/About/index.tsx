import { Hero } from './components/Hero'
import { AboutTheAuthor } from './components/AboutTheAuthor'
import { MyStory } from './components/MyStory'

export const About = () => {
    return (
        <main>
            <Hero />
            <AboutTheAuthor />
            <MyStory />
        </main>
    )
}