import {actionType} from '../action/type'
const initialState = {
    listQuestion : [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionType.SET_QUESTION):
            console.log(2)
            state.listQuestion = action.payload
            return {...state}
        default:
            return state
    }
}
export default reducer