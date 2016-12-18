var React = require("react");
var ReactDOM = require("react-dom");


var Main = require("./Components/main.js")
var Search = require("./Components/search.js")
var Saved = require("./Components/saved.js")

ReactDOM.render(

	<div className="main-container">

		<Main />
		<Search />
		<Saved />
	</div>,
	
	document.getElementById("app")

)		
