import React, { Component } from 'react';
import { fetchPulses } from '../actions/index';
import { connect } from 'react-redux';

import PulseList from '../components/PulseList';
import FilterContainer from './FilterContainer';

class PulsesContainer extends Component {
	constructor(props) {
		super(props);

    		this.handleFilterPulses = this.handleFilterPulses.bind(this);
		this.state = {
			pulses: [],
		filteredPulses: []
		}
	
	}

	componentDidMount() {
		//debugger
		this.props.fetchPulses().then(
			response => {
				this.setState({
					pulses: response,
					filteredPulses: response
				})
			}
		)
	}


	handleFilterPulses(filter) {
	    //debugger
	    // Filter based on tags 
	    const filteredPulses = this.state.pulses.filter(pulse =>
	      (pulse.tags.filter(tag => tag.title.includes(filter['tagFilter'])).length >= 0) //&&
	      //(pulse.x_mitre_platforms.filter(platform => platform.includes(filter.platformFilter)).length > 0)
	    );
		//debugger
	    // Filtering filtered pulses based on user input
	    const result = filteredPulses.filter(pulse => Object.values(pulse).flat().join('').includes(filter['inputFilter']));
		
	    return this.setState({
	      ...this.state,
	      filteredPulses: result
	    })

	}

	render() {
		
		return (
			<div>
				{/* PulsesContainer */}

				<FilterContainer 
					filterPulses={ this.handleFilterPulses }
				/>

				<PulseList 
					pulses={ this.state.filteredPulses }
				/>
			</div>
		)
	}
}

export default connect(null, { fetchPulses })(PulsesContainer);
