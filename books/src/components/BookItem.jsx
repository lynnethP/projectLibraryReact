import img from '../img/book.png'
export function BookItem(book) {

    return (
        <>
            <li>{book.title} ({book.publisher_date}) <br />
                {book.pages} - {book.language} <br />
                <a href={book.url_details}>{book.url_details}</a>
                <a href="#">Details</a>
                <br /><br />
                
                <img src={img} alt="Cover" width='100px' />
            </li>
        </>
    )
}