import { Hero } from "./components/Hero"
import { AuthorsBookIncludesSection } from "./components/AuthorsBookIncludesSection"
import { AboutAuthor } from "./components/AboutAuthor"
import { TrustedByTheBest } from "./components/TrustedByTheBest"
import { GetBookCopyToday } from "./components/GetBookCopyToday"
import { WhatWillYouLearn } from "./components/WhatWillYouLearn"
import { TheChapterIncludes } from "./components/TheChapterIncludes"
import { WhatReadersSay } from "./components/WhatReadersSay"
import { ArticlesAndResources } from "./components/ArticlesAndResources"
import { ReadFreeChapterSection } from "./components/ReadFreeChapterSection"
import { useRef } from "react"

export const Home = () => {

    const readFreeDemo = useRef<HTMLElement>(null);

    function scrollOnClick() {
        readFreeDemo.current?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <main>
            <Hero
                scrollOnClick={scrollOnClick} 
            />
            <AuthorsBookIncludesSection />
            <AboutAuthor />
            <TrustedByTheBest />
            <GetBookCopyToday />
            <WhatWillYouLearn />
            <TheChapterIncludes 
                scrollOnClick={scrollOnClick} 
            />
            <WhatReadersSay />
            <ArticlesAndResources />
            <ReadFreeChapterSection 
                readFreeDemo={readFreeDemo}
            />
        </main>
    )
}