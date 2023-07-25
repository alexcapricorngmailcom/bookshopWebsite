import { HeroSection } from "./components/Hero"
import { AuthorsBook } from "./components/AuthorsBook"
import { About } from "./components/About"
import { TrustedBy } from "./components/TrustedBy"
import { Callout } from "./components/Callout"
import { WhatWillYouLearn } from "./components/WhatWillYouLearn"
import { TheChapter } from "./components/TheChapter"
import { Testimonial } from "./components/Testimonial"
import { Blog } from "./components/Blog"
import { ReadFreeChapter } from "./components/ReadFreeChapter"


export const Home = () => {
    return (
        <main>
            <HeroSection />
            <AuthorsBook />
            <About />
            <TrustedBy />
            <Callout />
            <WhatWillYouLearn />
            <TheChapter />
            <Testimonial />
            <Blog />
            <ReadFreeChapter />
        </main>
    )
}