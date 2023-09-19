import { CommonHero } from '../../shared/components'
import { StyleGuideItem } from './components/StyleGuideItem'


export const StyleGuide = () => {
    return (
        <main>
            <CommonHero
                title='Style Guide'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <StyleGuideItem />
        </main>
    )
}