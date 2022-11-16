//Actions
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';

//Reducer 
export default function bookReducer(state= {books: []}, action){
    switch(action.type){
        case 'ADDBOOK':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    author: action.author
                }
            ];
        case 'REMOVEBOOK':
            return books.filter(book=>book.id!==action.id);
        default: return state;
    }
}

//Action Creators
export function addBook (book){
    return {type: ADDBOOK,
     payload: {
        id: book.id,
        title: book.title,
        author: book.author
     }
    };
}

export function removeBook (bookId){
    return {type: REMOVEBOOK,
        payload: {
            id:bookId
        } 
        };
}