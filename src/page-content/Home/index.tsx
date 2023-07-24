import { HeroSection } from "./components/Hero"
import { AuthorsBook } from "./components/AuthorsBook"
import { About } from "./components/About"


export const Home = () => {
    return (
        <main>
            <HeroSection />
            <AuthorsBook />
            <About />
        </main>
    )
}