
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


export const login = (creds) => {

  return async dispatch => {
    function onSuccess(loginResponse) {
      let filters = {};
      debugger

      // change filters and pulses to whatever is returned
      // after successfull login
      dispatch({ type: 'USER_LOGGED_IN', filters })
      //  debugger
      return loginResponse;
    }

    function onError(error) {
      debugger
      dispatch({ type: 'FETCH_ERROR_GENERATED', error });
      return error;
    }

    try {
      dispatch({ type: 'USER_LOGGING_IN' })
      debugger
      const request = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            user: {
              email: creds.email,
              password: creds.password,
              password_confirmation: creds.password
              // Once signup is confirmed to be properly working,
              // need to implement password confirmation in registration form
            }
          })
      });
      const loginResponse = await request.json();

      return onSuccess(loginResponse);
    } catch (error) {
      return onError(error);
    }
  }

}
