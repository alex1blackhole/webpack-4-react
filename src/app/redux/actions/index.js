import * as bookConst from '../const/index'

export function booksAdd() {
    return dispatch => {
        dispatch({
            type: bookConst.BOOKS_ADD
        })
    }
}