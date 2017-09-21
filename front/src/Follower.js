import React, {Component} from "react";
import PropTypes from "prop-types";

class Follower extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="user">{this.props.follower.login}</div>
				<div className="url"><a href={this.props.follower.url}>Repository</a></div>
			</div>
			);
	}
}

Follower.propTypes = {
	follower: PropTypes.object.isRequired
};

export default Follower;