
export const fetchPulses = () => {

  return async dispatch => {
    function onSuccess(pulses) {
      let filters = {};
      debugger
	
      // Ensuring that there are unique tags only
      filters.tags = pulses.map(pulse =>
        pulse.tags)
        .flat()
	.map(tag => tag.title)
        .reduce((result, nextItem) =>
          result.includes(nextItem) ?
          result :
          result.concat(nextItem),
        []);

      dispatch({ type: 'FETCH_PULSES', pulses });
      dispatch({ type: 'SET_FILTERS', filters })
      //  debugger
      return pulses;
    }

    function onError(error) {
      debugger
      dispatch({ type: 'FETCH_ERROR_GENERATED', error });
      return error;
    }

    try {
      dispatch({ type: 'LOADING_PULSES' }) 

      const request = await fetch('http://localhost:3000/api/pulses');
      const pulses = await request.json();

      return onSuccess(pulses);
    } catch (error) {
      return onError(error);
    }
  }

}

