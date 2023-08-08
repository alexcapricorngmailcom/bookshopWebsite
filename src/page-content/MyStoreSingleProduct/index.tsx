import { CommonHero } from "../../shared/components"
import { SingleProduct } from "./components/SingleProduct"
import { Features } from "./components/Features"

export const MyStoreSingleProduct = () => {
    return (
        <main>
            <CommonHero
                title='My Store'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <SingleProduct />
            <Features />
        </main>
    )
}