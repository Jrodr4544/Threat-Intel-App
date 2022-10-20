export default (state = {loading: false, pulses: []}, action) => {

    switch (action.type) {
        case "LOADING_PULSES":
        debugger
		console.log('LOADING_PULSES')
            return { ...state, loading: true }

        case "FETCH_PULSES":
        debugger
        console.log('FETCHING_PULSES')
        console.log(action)
            return { ...state, patterns: action.pulses }

        case "FETCH_ERROR_GENERATED":
        debugger
        console.log('FETCH_ERROR_GENERATED')
        console.log(action)
            return { ...state, loading: action } 
    
        default:
            return state
    }

}
