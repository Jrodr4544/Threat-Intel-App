export default (state = {loading: false, filters: []}, action) => {

    switch (action.type) {
        case "LOADING_FILTERS":
        debugger
		console.log('LOADING_FILTERS')
            return { ...state, loading: true }

        case "FETCH_FILTERS":
        debugger
        console.log('FETCHING_FILTERS')
        console.log(action)
            return { ...state, filters: action.filters }

        case "FETCH_ERROR_GENERATED":
        debugger
        console.log('FETCH_ERROR_GENERATED')
        console.log(action)
            return { ...state, loading: action } 
    
        default:
            return state
    }

}
