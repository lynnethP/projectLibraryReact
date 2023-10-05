const URL = 'https://www.etnassoft.com/api/v1/get/'
// https://www.etnassoft.com/api/v1/get/?num_items=25
export function getBooks() {
    try {
        return fetch(URL + '?num_items=25').then(response => {
            let data = response.json()
            return data
        })
    } catch (error) {
        console.error(error)
    }
}


export function getBookDetails(bookId) {
    try {
        return fetch(URL + '?id=' + bookId).then(response => {
            let data = response.json()
            return data
        })
    } catch (error) {
        console.error(error)
    }
}

export function getBookSearch(word) {
    try {
        return fetch(URL + '?keyword=' + word).then(response => {
            let data = response.json()
            return data
        })
    } catch (error) {
        console.error(error)
    }
}

