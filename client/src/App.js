import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	BrowserRouter as Router,
	Routes,
	Route
}	from 'react-router-dom';

import PulsesContainer from './containers/PulsesContainer';
import NavBar from './components/NavBar';
import About from './components/About';
import Index from './components/Index';
import UserProfileContainer from './containers/UserProfileContainer';

function App() {
  return (
    <div className="App">

	  <Router>
	  <NavBar />
	  	<Routes>
	  		<Route path='/pulses' element={<PulsesContainer />} />
	  		<Route path='/about' element={<About />} />
			<Route path='/login' element={<UserProfileContainer />} />
	  		<Route exact path='/' element={<Index />} />
	  {/* <Route exact path='/' render={() => (
				<div className='App'><h1>Welcome</h1></div>
			)} />
			*/}
	  	</Routes>
	  </Router>
    </div>
  );
}

export default App;
