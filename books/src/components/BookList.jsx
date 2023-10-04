import { useEffect, useState } from "react"
import * as API from '../services/data'
import { BookItem } from "./BookItem"
import { Flex, Center, Image } from "@chakra-ui/react"
import loading from '../img/Load_Icon.gif'

export function BookList() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        API.getBooks().then(setBooks)   //Peticion a endpoint de la API y actualizar el estado de los libros
    })

    return (
        <>
            {books.length == 0 ? (<Center><Image src={loading} /></Center>) : (
                <section>
                    <Flex direction='column'>
                        {
                            books.map((book) => (
                                <BookItem key={book.ID} {...book} />
                            ))
                        }
                    </Flex>
                </section>
            )}
        </>
    )
}