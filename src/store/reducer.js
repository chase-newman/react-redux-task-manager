import * as actionTypes from './actions';

const initialState = {
    inputText: ""
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.SUBMIT_FORM) {
        console.log(state.inputText);
        return {
            inputText: ""
        }
    }
    else if(action.type === actionTypes.ON_CHANGE) {
        return {
            inputText: action.val
        }
    }
    else {
       return {
            ...state
        } 
    }
}


export default reducer;