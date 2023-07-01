const initialStateSearch = {
    searchField:""
}



export const onSearchChange = (state=initialStateSearch,action={}) => {
    switch (action.type) {
        case "SEARCH_ROBOTS":
            
            return {...state , searchField: action.payload};
         
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending : false,
    robots: [] ,
    error: ""
}

export const onRequestRobots = (state=initialStateRobots,action={}) => {
    switch (action.type) {
        case "REQUEST_PENDING":
            console.log("in pending " ,action);
            return {...state , isPending:true};
        case "REQUEST_SUCCESS":
            console.log("in reducer : ",action);
            return {...state , isPending : false, robots : action.payload}
        case "REQUEST_FAILED":

            return {...state , isPending : false, error : action.payload}
         
        default:
            console.log("state: ",state);
            return state;
    }
}