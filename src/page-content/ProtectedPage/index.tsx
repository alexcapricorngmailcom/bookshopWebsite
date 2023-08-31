import { CommonHero } from '../../shared/components'
import { PasswordProtected } from './components/PasswordProtected'


export const ProtectedPage = () => {
    return (
        <main>
            <CommonHero
                title='Protected Page'
                paragraph='There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.'
            />
            <PasswordProtected />
        </main>
    )
}