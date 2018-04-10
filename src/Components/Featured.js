import React, { Component } from 'react';
	
import img from '../images/category-bedroom.png';

import { Link } from 'react-router-dom';


class Featured extends Component{
	render() {
		console.log(this.props.id)
		return(
			<div className='featured'>
				<Link to={'/products/'+this.props.id}>
					<div className='featured_list' >
						<div>
						<img className='featured_img' src={this.props.imageLink}/>
						</div>
						<span>{this.props.item}</span>
						<p>${this.props.price}</p>
					</div>
				</Link>
			</div>
		);
	}
}




export default Featured;  