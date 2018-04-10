import React, { Component } from 'react';

import request from 'superagent';

import Featured from './Featured';

class Categories extends Component {
	constructor () {
		super ();

		this.state = {
			data: []
		};
	}

	componentDidMount(){
		request
		.get('https://mallory-furniture-admin.now.sh/api/v1/products')
		.then(response=>{
			this.setState({		
				data: response.body
			})
		});
	}

	render(){
		return (
			<div className='container'>
        	{this.state.data.map(function(products){
         	return <Featured
                 imageLink={products.imageLink} 
                 item={products.item}
                 price={products.price}
                 id={products._id}
                />  
           })}    
            </div>
		)
	}
}




export default Categories;