import React, {Component} from 'react'
import './projectbox.css'
class ProjectBox extends Component {
	constructor(props){
		super(props)
		
	}

	getInfo(){
		const temp = [];
		for(let i = 0; i < this.props.proj.length; i++){
			temp.push(

				<div className="projectBox col-lg-6 col-xs-10">
					<img className="img-fluid rounded projectPic" src={this.props.proj[i].img} />
					<h1>{this.props.proj[i].name}</h1>
					<p>{this.props.proj[i].description}</p>
				</div>

			)
		}
		return temp;
	}

	render(){
		return (	
			<span>{this.getInfo()}</span>
		)
	}
}

export default ProjectBox;