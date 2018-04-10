import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import img from '../images/mf-logo-white.svg'




class Header extends Component{
	render() {
	return(
		<div className='header__block'>
			<img className='header__element header__logo' src={img}/>
			<ul className='header__element header_list'>
  			<li>About</li>
  			<li>Terms + Conditions</li>
  			<span className='header__element'>|</span> 
  			<li><Link to='/categories/all'>All</Link></li>
			  <li><Link to='/categories/seating'>Seating</Link></li>
			  <li><Link to='/categories/tables'>Tables</Link></li>
			  <li><Link to='/categories/desks'>Desk</Link></li>
			  <li><Link to='/categories/storage'>Storage</Link></li>
			  <li><Link to='/categories/bedroom'>Bedroom</Link></li>
			  <li><Link to='/categories/miscellaneous'>Misc</Link></li>
			  <span className='header__element'>|</span>
  		</ul>
  		<button>
  			<i className="fa fa-shopping-cart"></i>
  		</button>	
		</div>		
	)
	}
}


export default Header;