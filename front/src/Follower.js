import React, {Component} from "react";
import PropTypes from "prop-types";

import "./Follower.css";

class Follower extends Component {
	render() {
		return (
			<div className="follower">
				<img src={this.props.follower.img} alt={this.props.follower.login + " profile pic"} />
				<div className="user">{this.props.follower.login}</div>
				<div className="url"><a href={this.props.follower.url} target="_blank">Repository</a></div>
				
			</div>
		);
	}
}

Follower.propTypes = {
	follower: PropTypes.object.isRequired
};

export default Follower;
