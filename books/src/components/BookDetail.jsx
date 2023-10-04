import { useParams } from 'react-router-dom'
import * as API from '../services/data'
import { useState, useEffect } from 'react'


export function BookDetail(id) {
    let params = useParams()
    const [book, setBook] = useState([])
    //console.log(setBook)
    useEffect(() => {
        API.getBookDetails(params.bookId).then(setBook)
    }, [book])

    return (

        <Box mt='50'>
            <Box mt='6' borderWidth='1px' borderRadius='lg' p='6' >
                <>
                    <Flex mb='2'>
                        <Box w='20%' color='gray.400'>Title:</Box>
                        <Box w='80%'>{book[0].title}</Box>
                    </Flex>
                    {!book[0] ? (<div>Loading...</div>) : (
                        <div >
                            <div>Title: {book[0].title}</div><br />
                            <div>Author: {book[0].author}</div><br />
                            <div>Publisher: {book[0].publisher}</div><br />
                            <div>Date: {book[0].publisher_date}</div><br />
                            <div>Pages: {book[0].pages}</div><br />
                            <div>Language: {book[0].language}</div><br />
                            <div>Categories: {book[0].categories.map(categorie => (
                                categorie.name + ' '
                            ))} </div><br />
                            <div>Link: {book[0].url_download}</div><br />
                            <div>Content: {book[0].content}</div><br />
                        </div>
                    )}
                </>
            </Box>
        </Box>


    )
}