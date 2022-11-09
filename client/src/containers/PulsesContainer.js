import React, { Component } from 'react';
import { fetchPulses } from '../actions/index';
import { connect } from 'react-redux';

import PulseList from '../components/PulseList';
import FilterContainer from './FilterContainer';

class PulsesContainer extends Component {
	constructor(props) {
		super(props);

    		this.handleFilterPulses = this.handleFilterPulses.bind(this);
    		this.handleSortOnDateCreated = this.handleSortOnDateCreated.bind(this);
		this.state = {
			pulses: [],
		filteredPulses: [],
	          sortAscOrder: true
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

	handleSortOnDateCreated() {
		debugger
	    this.setState(state => ({
		sortAscOrder: !state.sortAscOrder
	    }))

	}

	render() {
		debugger
		const pulses = this.state.sortAscOrder === true ? 
			this.props.pulses.sort((a,b) => new Date(a.created_at) - new Date(b.created_at)) 
		:
			this.props.pulses.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)) 

		
		return (
			<div>
				{/* PulsesContainer */}

				<FilterContainer 
					sortPulses={ this.handleSortOnDateCreated }
					filterPulses={ this.handleFilterPulses }
				/>

				<PulseList 
					pulses={ pulses }
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	debugger
	let pulses = state.pulses.pulses !== undefined ? state.pulses.pulses : []


	return { pulses }

}

export default connect( mapStateToProps , { fetchPulses })(PulsesContainer);
