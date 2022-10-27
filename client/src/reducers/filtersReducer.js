export default (state = [], action) => {

    switch (action.type) {
        case "SET_FILTERS":
        debugger
        console.log('SETTING FILTERS')
            return action.filters
        
        default:
            return state
    }
}
