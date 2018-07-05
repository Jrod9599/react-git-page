import React, {Component} from 'react'
import ProjectBox from './ProjectBox';

const projectObj = [
	{
		name: 'testProj',
		img: './DSC_0062.JPG',
		description: 'This project was some stuff and stuff and stuff was used to create it'
	},
	{
		name: 'testProj2',
		img: './DSC_0062.JPG',
		description: 'This project was some stuff and stuff and stuff was used to create it'
	},
	{
		name: 'testProj2',
		img: './DSC_0062.JPG',
		description: 'This project was some stuff and stuff and stuff was used to create it'
	}
];

class Projects extends Component {
	render(){
		return (
				<div className="projects">
						<h2>Recent Projects</h2>
						<div>
							<ProjectBox proj={projectObj} />
						</div>
				</div>
			)
	}
}

export default Projects;