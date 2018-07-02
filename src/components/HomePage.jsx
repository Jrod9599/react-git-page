import React, {Component} from 'react';
import Knowledge from './Knowledge';

class HomePage extends Component{

	render(){
		return(

			<div className="homePage">
				<div className="titleRow">
				<br/>
					<img className="img-thumbnail profilePic" alt="" src="./DSC_0062.JPG" />
					<h3>Jonathan Rodriguez</h3>
				</div>
				<div className="bodyRow">
					<br/>
					<br/>
					<Knowledge />
				</div>
			</div>
		)
	}
}

export default HomePage;