import { CommonHero } from '../../shared/components'
import { ChangelogItem } from './components/ChangelogItem'


export const Changelog = () => {
    return (
        <main>
            <CommonHero
                title='Changelog'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <ChangelogItem />
        </main>
    )
}