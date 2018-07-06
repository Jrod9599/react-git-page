import React from 'react';

class LoadingPage extends React.Component {



	render(){

		return(
			<div className="centerBox">
				Page Coming Soon!
				<div class="progress progressBarBox">
	  				<div class="progress-bar progress-bar-striped progress-bar-animated" id="pageComplete" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
		)
	}
}

export default LoadingPage;