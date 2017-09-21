import React, {Component} from "react";
import PropTypes from "prop-types";

class Followers extends Component {
	render() {
		return (
			<div className="followers">
				<div className="name">{this.props.follower.id}</div>
				<div class="text">{this.props.follower.username}</div>
			</div>
		);
	}
}

Followers.propTypes = {
	username: PropTypes.object.isRequired
};

export default <Followers></Followers>;