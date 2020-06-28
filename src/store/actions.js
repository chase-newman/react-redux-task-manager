import axios from 'axios';

export const SUBMIT_FORM = "SUBMIT_FORM";
export const ON_CHANGE = "ON_CHANGE"


export const postData = () => {
   return {
        type: SUBMIT_FORM,
    }
}

export const submitForm = (event, value) => {
    event.preventDefault();
    console.log(value)
    return (dispatch) => {
        axios({
            method: "post",
            url: "https://burger-rebuild.firebaseio.com/tasks.json",
            data: {
                task: value
            }
        }).then(response => {
           console.log(response)
           dispatch(postData);
        });
    }
}



export const onChange = (event) => {
     return {
        type: ON_CHANGE,
        val: event.target.value
    }
}