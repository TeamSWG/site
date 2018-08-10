import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

const styles = {

};

class UserButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			anchorEl: null
		};
	}

	componentWillMount() {
		const cookies = new Cookies();
		let userData = cookies.get('userData');

		if (userData) {
			this.props.onLogin(userData.user._id, userData.token);
		}
	}

	componentWillReceiveProps(props) {
		let userId = props.userId;

		if (userId) {
			this.fetchUserData(userId);
		}
	}

	fetchUserData(userId) {
		axios.get('http://localhost:3000/user/' + userId)
			.then(response => {
				this.setState({
					user: response.data
				})
			})
			.catch(error => {
				console.log(error);
			});
	}

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

	logout = () => {
		this.handleClose();
		const cookies = new Cookies();
		cookies.remove('userData');

		this.setState({
			user: undefined
		});

		this.props.onLogin(undefined, undefined);
	};

	profileHref = () => {
		return '/user/' + this.state.user._id;
	};

	render() {
		return (
			<div>
				{this.state.user ?
					<div>
						<Button
							aria-owns={this.state.anchorEl ? 'simple-menu' : null}
							aria-haspopup="true"
							onClick={this.handleClick}
							color='inherit'
						>
							{this.state.user.username}
       			 </Button>
						<Menu
							id="simple-menu"
							anchorEl={this.state.anchorEl}
							open={Boolean(this.state.anchorEl)}
							onClose={this.handleClose}
						>
							<MenuItem onClick={this.handleClose} component={Link} to={this.profileHref()}>Profile</MenuItem>
							<MenuItem onClick={this.logout}>Logout</MenuItem>
						</Menu>
					</div>
				:
					<div>
						<Button color="inherit" component={Link} to="/createUser">
							Sign Up
						</Button>
						<Button color="inherit" component={Link} to="/login">
							Log in
						</Button>
					</div>
				}
			</div>

		);
	}
}

export default withStyles(styles)(UserButton);