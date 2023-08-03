import { Hero } from "./components/Hero"
import { AuthorsBookIncludesSection } from "./components/AuthorsBookIncludesSection"
import { AboutAuthor } from "./components/AboutAuthor"
import { TrustedByTheBest } from "./components/TrustedByTheBest"
import { GetBookCopyToday } from "./components/GetBookCopyToday"
import { WhatWillYouLearn } from "./components/WhatWillYouLearn"
import { TheChapterIncludes } from "./components/TheChapterIncludes"
import { WhatReadersSay } from "./components/WhatReadersSay"
import { ArticlesResources } from "./components/ArticlesResources"
import { ReadFreeChapterSection } from "./components/ReadFreeChapterSection"

export const Home = () => {
    return (
        <main>
            <Hero />
            <AuthorsBookIncludesSection />
            <AboutAuthor />
            <TrustedByTheBest />
            <GetBookCopyToday />
            <WhatWillYouLearn />
            <TheChapterIncludes />
            <WhatReadersSay />
            <ArticlesResources />
            <ReadFreeChapterSection />
        </main>
    )
}