var React = require("react");

var Main = React.createClass({
	render: function(){
		return(
			<h1>Main</h1>
				<div className="main-container">
					<div className="container">
						<div className="jumbotron">
							<h1>New York Times Article Scrubber</h1>
							<p>Search for articles that interest you</p>
								<a className="btn btn-primary btn-lg">Search</a>
							</p>
						</div>
					</div>	
				</div>	

		
	});			
});
	document.getElementById("app")			


module.exports = Main;