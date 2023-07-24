import { HeroSection } from "./components/Hero"
import { AuthorsBook } from "./components/AuthorsBook"
import { About } from "./components/About"
import { TrustedBy } from "./components/TrustedBy"
import { Callout } from "./components/Callout"


export const Home = () => {
    return (
        <main>
            <HeroSection />
            <AuthorsBook />
            <About />
            <TrustedBy />
            <Callout />
        </main>
    )
}