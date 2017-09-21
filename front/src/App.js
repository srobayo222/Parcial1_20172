import React, {Component} from "react";
import FollowerList from "./FollowerList.js"
import Searchbar from "./Searchbar.js"

export default class App extends Component {
	componentDidMount(){
		fetch("/getFollowers/"+this.state.username)
		.then(res => res.json())
      	.then(follows => {
      		let follow= follows.data.map((usuario, index) => {
      			return {
      				id: `usuario_${index+1}`,
      				login: usuario.login,
      				url: usuario.html_url
      			}
      		});
      		this.setState({followers: follow});
      	});
	}

	constructor(props){
		super(props);

		this.state = {
			followers: [],
			username: "john-guerra"
		}
	}

	render() {
		console.log(this.state);
		return(
			<div>
				<h1>GitHub Followers! </h1>
				<Searchbar />
				<div className="row">
					<div className="col-8">
						<FollowerList followers={this.state.followers} />
					</div>
				</div>
			</div>
		);
	}
}