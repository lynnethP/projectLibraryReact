import { BookList } from './components/BookList'
import { Header } from './components/Header'
import { BookDetail } from './components/BookDetail'
import { Routes, Route } from 'react-router-dom'
import {Box} from '@chakra-ui/react'

export function App() {

  return (
    <>
      <Header />

      <Box ml='15%' mr='15%' mt='50px'>

        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='book/:bookId' element={<BookDetail />} />
        </Routes>
      </Box>


    </>
  )
}


