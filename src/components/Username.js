import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {

};

class Username extends React.Component {

	href() {
		return '/user/' + this.props.user._id;
	}

	render() {
		return (
			<Link to={this.href()}>{this.props.user.username}</Link>
		);
	}
}

export default withStyles(styles)(Username);