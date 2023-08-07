import { CommonHero } from '../../shared/components'
import { KeepInTouch } from './components/KeepInTouch'
import { FrequentQuestions } from './components/FrequentQuestions'


export const Contact = () => {
    return (
        <main>
            <CommonHero
                title='Contact Us'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <KeepInTouch />
            <FrequentQuestions />
        </main>
    )
}