//Actions
const CHECKSTATUS = 'bookstore/categories/CHECKSTATUS';

//Reducer 
export default function reducer(state={categories: []}, action = {}){
    switch(action.type){
        case "CHECKSTATUS":
            return "Under construction";
            break;
        default: 
            return state;
            break;
    }
}

//Action Creators
export function checkStatus (categories){
    return {type: CHECKSTATUS, categories};
}
