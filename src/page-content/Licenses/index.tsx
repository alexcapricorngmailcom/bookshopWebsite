import { CommonHero } from '../../shared/components'
import { LicensesItem } from './components/LicensesItem'


export const Licenses = () => {
    return (
        <main>
            <CommonHero
                title='Licenses'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <LicensesItem />
        </main>
    )
}