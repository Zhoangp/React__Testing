import axios from "axios"
import {createAction} from './index'
import {actionType} from './type'

export const fetchQuestion = (dispatch) => {
    axios({
        method:"GET",
        url:"https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
    })
    .then((res) => {
        dispatch(createAction(actionType.SET_QUESTION, res.data))
    })
    .catch((err) => {
        console.log(err)
    })
}
export const getResult = (dispatch) => {
        dispatch(createAction(actionType.GET_RESULT))
}
export const getAnswers = (data) => {
    return (dispatch) => {
        dispatch(createAction(actionType.GET_ANSWERS,data))
    }
}
