import React, { Component } from 'react';

import request from 'superagent';

import Featured from './Featured';

import Slide from './Slide';

import Browse from './Browse';



class Home extends Component {
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

	createList() {
		return this.state.data.filter( mueble => mueble.featured === true);
	}

	render(){
		const newList = this.createList()
		return(
			<div>
			<Slide />
	      	<h1>Featured Products</h1>
       		<p>Check out some of our favorite listings</p>
        	<div className='container'>
        	{newList.map(function(products){
         	return <Featured
                 imageLink={products.imageLink} 
                 item={products.item}
                 price={products.price}
                 id={products._id}
                />  
           })}    
            <div>
          		<button>All Products</button>
        		</div>
        		<h1>Browse By Categories</h1>
        		<p>Explore by furniture type.</p>              
        		</div> 
    		 <Browse />   		
        
      </div>


		);
	}



}

export default Home;