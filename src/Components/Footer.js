import React, { Component } from 'react';

import img from '../images/mf-logo-black.svg'



class Footer extends Component{
	render() {
		return (
		<div className='footer_component'>
			<div className='image_container'>
				<img className='footer_img' src={img}/>
			</div>	
			<div className='footer_elements'>	
				<div>
					<ul>
						<li>Company</li>
						<li>About</li>
						<li>Press</li>
						<li>Terms + Conditions</li>
					</ul>
				</div>	
				<div>
					<ul>
						<li>Categories</li>
						<li>Seating</li>
						<li>Tables</li>
						<li>Misc</li>
					</ul>
				</div>	
				<div>
					<ul>
						<li>Social</li>
						<li><i class="fa fa-instagram"></i></li>
						<li><i class="fa fa-twitter"></i></li>
						<li><i class="fa fa-pinterest"></i></li>
					</ul>
				</div>
			</div>	
		</div>
		);
	}
}


export default Footer;