import { HeroSection } from "./components/Hero"
import { AuthorsBook } from "./components/AuthorsBook"
import { About } from "./components/About"
import { TrustedBy } from "./components/TrustedBy"


export const Home = () => {
    return (
        <main>
            <HeroSection />
            <AuthorsBook />
            <About />
            <TrustedBy />
        </main>
    )
}