import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as API from '../services/data'
import loading from '../img/Load_Icon.gif'
import { Heading, Center, Image, Flex } from "@chakra-ui/react"
import { BookItem } from "./BookItem"

export function BookSearchList() {
    let params = useParams()
    const [books, setBoks] = useState([])

    useEffect(() => {
        API.getBookSearch(params.word).then(setBoks)
    }, [books])

    return (
        <>
            <Heading as='h1' size='xl'>
                Resultados de la busqueda: {params.word}
            </Heading>
            {books.length == 0 ?
                (<Center><Image src={loading} /></Center>) :
                (<section>
                    <Flex direction='column'>
                        {books.map(book => (
                            <BookItem key={book.ID} {...book} />
                        ))}
                    </Flex>
                </section>)
            }
        </>
    )
}