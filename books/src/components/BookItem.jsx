import img from '../img/book.png'
import { Link } from 'react-router-dom'
export function BookItem(book) {

    return (
        <>
            <li>{book.title} ({book.publisher_date}) <br />
                {book.pages} - {book.language} <br />
                <a href={book.url_details}>{book.url_details}</a><br /><br />
                <Link to={'/book/' + book.ID}>
                    <a>Details</a>
                </Link>
                <br /><br />


                <img src={img} alt="Cover" width='100px' />
            </li>
        </>
    )
}