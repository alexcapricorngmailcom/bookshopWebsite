import { AuthorsBook } from "./components/AuthorsBook"
import { HeroSection } from "./components/Hero"

export const Home = () => {
    return (
        <main>
            <HeroSection />
            <AuthorsBook />
        </main>
    )
}