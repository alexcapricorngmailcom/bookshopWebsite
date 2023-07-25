import { HeroSection } from "./components/Hero"
import { AuthorsBook } from "./components/AuthorsBook"
import { About } from "./components/About"
import { TrustedBy } from "./components/TrustedBy"
import { Callout } from "./components/Callout"
import { WhatWillYouLearn } from "./components/WhatWillYouLearn"
import { TheChapter } from "./components/TheChapter"


export const Home = () => {
    return (
        <main>
            <HeroSection />
            <AuthorsBook />
            <About />
            <TrustedBy />
            <Callout />
            <WhatWillYouLearn />
            <TheChapter/>
        </main>
    )
}