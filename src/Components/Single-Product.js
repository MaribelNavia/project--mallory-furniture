import React, { Component } from 'react';

import request from 'superagent';

import img from '../images/category-bedroom.png';



class SingleProduct extends Component{
	constructor (){
		super();

		this.state = {
			data: []
		};
	}

	componentDidMount(){	
		request
		.get('https://mallory-furniture-admin.now.sh/api/v1/products/'+this.props.match.params.id)
		.then(response=>{
			console.log(response)
			this.setState({
				data: response.body
			})
		})
	}



	render(){
		return (
			<div className='single-product'>
			<img className='single_img' src={this.state.data.imageLink}/>
			<div className='single_card'>
				<div className='card_first_element'>
					<p>{this.state.data.item}</p>
					<p className='price'>{this.state.data.price}</p>
				</div>
				<div className='card_second_element'>
					<div>
						<p>Condition</p>
						<p>{this.state.data.condition}</p>
					</div>
					<div>
						<p>Measuraments</p>
						<p>W:{this.state.data.width} L:{this.state.data.length} H:{this.state.data.height}</p>
					</div>
					<button>Add to Cart</button>
				</div>
			</div>
			</div>

		);
	}
}



export default SingleProduct;