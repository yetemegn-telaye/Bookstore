//Actions
const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';

//Reducer 
export default function reducer(state= {books: []}, action = {}){
    switch(action.type){
        default: return state;
    }
}

//Action Creators
export function addBook (book){
    return {type: ADDBOOK, book};
}

export function removeBook (bookId){
    return {type: REMOVEBOOK, bookId};
}