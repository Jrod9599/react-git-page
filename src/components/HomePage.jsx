import React, {Component} from 'react';
import Knowledge from './Knowledge';
import Projects from './Projects';

class HomePage extends Component{

	render(){
		return(

			<div className="homePage">
				<div className="titleRow">
					<br/>
					<img className="rounded profilePic" alt="" src="./DSC_0062.JPG" />
					{/*<h3>Jonathan Rodriguez</h3>
					<p>Highly motivated Software Engineer with a passion<br/>to meet the challenges facing today's Technology setting</p>
				*/}</div>
				<div className="bodyRow">
					<br/>
					<br/>
					<Knowledge />
					<br />
					<br />
					<Projects />
				</div>
			</div>
		)
	}
}

export default HomePage;