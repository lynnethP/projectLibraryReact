import { BookList } from './components/BookList'
import { Header } from './components/Header'
import { BookDetail } from './components/BookDetail'
import {Routes, Route} from 'react-router-dom'

export function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='book/:bookId' element={<BookDetail />} />
      </Routes>

    </>
  )
}


