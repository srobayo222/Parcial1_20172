import React, {Component} from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
	constructor(props){
		super(props);
	}

	onKeyPress(evt) {
		if(evt.key ==="Enter") {
			this.props.onSearch(evt.target.value);
		}
	}

	render() {
		return (
			<div className="SearchBar">
				<input type="text" 
					placeholder="Username" 
					ref = {(input) => this.input = input}
					defaultValue = {this.props.user}
					onKeyPress = {this.onKeyPress.bind()}/>
			</div>
		);
	}
}

Searchbar.propTypes = {
	onSearch: PropTypes.object.isRequired

export default Searchbar;