
export const fetchPulses = () => {

  return async dispatch => {
    function onSuccess(pulses) {
      let filters = {};
      debugger
      dispatch({ type: 'FETCH_PULSES', pulses });
      //dispatch({ type: 'SET_FILTERS', filters })
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

      const request = await fetch('http://localhost:3000/api/');
      const pulses = await request.json();

      return onSuccess(pulses);
    } catch (error) {
      return onError(error);
    }
  }

}

