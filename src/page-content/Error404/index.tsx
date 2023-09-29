import { CommonHero } from "../../shared/components";
import { PageNotFound } from "./components/PageNotFound";

export const Error404 = () => {
    return (
        <main>
            <CommonHero
                title='Page Error'
                paragraph='There are many variations of passages of Lorem available, have suffered alteration in some form.'
            />
            <PageNotFound />
        </main>
    );
}