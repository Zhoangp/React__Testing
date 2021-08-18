import {actionType} from '../action/type'
const Answers = {
    answers: [],
    mark: 0
}
const reducer = (state = Answers, action) => {
    switch (action.type) {
        case (actionType.GET_ANSWERS): 
            const cloneAnswers = [...state.answers]
            const foundIndex = cloneAnswers.findIndex((item) => {
                    return item.id === action.payload.id
            })
            if(foundIndex === -1) {
                 state.answers.push(action.payload)
            }
            else {
                state.answers[foundIndex] = action.payload
            }
         
            
            return {...state}
        case(actionType.GET_RESULT):
        let sum = 0;
        for(let i of state.answers) {
            if(i.exact)
                sum++
        }
        if(state.mark === 0)
            state.mark = sum
        return {...state}
        default: 
    return {...state}
            

    }
}
export default reducer