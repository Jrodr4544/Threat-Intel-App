import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App'
import rootReducer from './reducers/index'

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)) 
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	Document.getElementById('root')
)