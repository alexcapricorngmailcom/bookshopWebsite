import { Hero } from "./components/Hero"
import { AuthorsBookIncludes } from "./components/AuthorsBookIncludes"
import { AboutAuthor } from "./components/AboutAuthor"
import { TrustedByTheBest } from "./components/TrustedByTheBest"
import { GetBookCopyToday } from "./components/GetBookCopyToday"
import { WhatWillYouLearn } from "./components/WhatWillYouLearn"
import { TheChapterIncludes } from "./components/TheChapterIncludes"
import { WhatReadersSay } from "./components/WhatReadersSay"
import { ArticlesResources } from "./components/ArticlesResources"
import { ReadFreeChapter } from "./components/ReadFreeChapter"

export const Home = () => {
    return (
        <main>
            <Hero />
            <AuthorsBookIncludes />
            <AboutAuthor />
            <TrustedByTheBest />
            <GetBookCopyToday />
            <WhatWillYouLearn />
            <TheChapterIncludes />
            <WhatReadersSay />
            <ArticlesResources />
            <ReadFreeChapter />
        </main>
    )
}