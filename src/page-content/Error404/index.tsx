import { Hero } from "./components/Hero";
import { PageNotFound } from "./components/PageNotFound";

export const Error404 = () => {
    return (
        <main>
            <Hero />
            <PageNotFound />
        </main>
    );
}