import React, {Component} from "react";
import Followers from "./Follower.js"
import Searchbar from "./Searchbar.js"

export default class App extends Component {
	componentDidMount(){
		fetch("/getFollowers/john-guerra")
		.then((res) => res.json())
		.then((json) => console.log(json));
			
	}
	constructor(props){
		super(props);

		this.state = {
			follower: []
		}
	}

	renderFollowers() {
		return this.state.follower.map((t) => {
			return (<Followers follower ={t}/>);
		});
	}

	render() {
		return(
			<div className="row">
				<div className="col-md-8">
					<h1>GitHub Followers! </h1>
					<Searchbar />
					{this.renderFollowers()}
				</div>
			</div>
		);
	}
}