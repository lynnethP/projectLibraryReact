import logo from '../img/library.png'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <>
            <Link to={'/'}>
                <img src={logo} alt="Logo" height='50px' />
            </Link>
        </>
    )
}