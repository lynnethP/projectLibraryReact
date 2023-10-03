import { useEffect, useState } from "react"
import * as API from '../services/data'
import { BookItem } from "./BookItem"

export function BookList() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        API.getBooks().then(setBooks)   //Peticion a endpoint de la API y actualizar el estado de los libros
    })

    return (
        <>
            <ul>
                {
                    books.map((book) => (
                        <BookItem key={book.ID} {...book} />
                    ))
                }
            </ul>
        </>
    )
}