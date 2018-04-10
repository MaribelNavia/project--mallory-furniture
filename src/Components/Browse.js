import React, { Component } from 'react';

class Browse extends Component{
	render(){
		return (
			<div className='browse_buttons'>
				<button className='element_browse'>Seating</button>
				<button className='element_browse'>Tables</button>
				<button className='element_browse'>Desks</button>
				<button className='element_browse'>Bedroom</button>
				<button className='element_browse'>Storage</button>
				<button className='element_browse'>Misc</button>	
			</div>

		);
	}
}


export default Browse;