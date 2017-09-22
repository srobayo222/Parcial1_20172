import React, {Component} from "react";

class Searchbar extends Component {
	onKeyPress(evt) {
		if(evt.key ==="Enter") {
			console.log(evt.target.value);	
			this.props.search(evt.target.value);
		}
	}

	render() {
		return (
			<div className="SearchBar">
				<input type="text" 
					placeholder="Username" 
					onKeyPress = {this.onKeyPress.bind(this)}/>
			</div>
		);
	}
}

export default Searchbar;