import { CommonHero } from "../../shared/components"
import { Blog } from "./components/Blog"


export const Articles = () => {
    return (
        <main>
            <CommonHero
                title='Articles'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <Blog />
        </main>
    )
}