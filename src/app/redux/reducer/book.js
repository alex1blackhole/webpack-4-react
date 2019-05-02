import {BOOKS_ADD,BOOKS_DEC,BOOKS_FAKE} from "../const";

const initialState = {
    books: 1
};

export function bookReducer(state = initialState, action) {

    switch (action.type) {

        case BOOKS_ADD:
            return {...state, books: state.books + 1};

        default :
            return state
    }
}