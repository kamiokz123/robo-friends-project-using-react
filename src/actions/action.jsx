export const onSearch = (text) => {
    return {
        type:"SEARCH_ROBOTS",
        payload: text
    }
}

export const requestRobots = (dispatch) => {
    dispatch({type:"REQUEST_PENDIND"});
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data => dispatch({type:"REQUEST_SUCCESS",payload:data}))
    .catch(error => dispatch({type:"REQUEST_FAILED",payload:error}));
} 