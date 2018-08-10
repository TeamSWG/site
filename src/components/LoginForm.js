import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	button: {
		margin: 0,
		float: 'right'
	}
});

class LoginForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			// TODO
		};
	}

	handleChange(event) {
		const { target: { name, value } } = event;
		this.setState(() => ({ [name]: value }))
	}

	handleSuccess(response) {
		this.setState({
			status: 'success'
		});

		if (this.props.onLogin) {
			let userData = response.data;	// Contains ID and token

			const cookies = new Cookies();
			cookies.set('userData', userData, { path: '/' });

			this.props.onLogin(userData.user._id, userData.token);
		}
	}

	handleError(error) {
		console.log(error);
		if (error.response) {
			switch (error.response.status) {
				case 404:
					// TOODO user not found
					break;
				case 403:
					// Banned
					this.setState({
						status: 'banned'
					});
					break;
				default:
					// TODO general error
					break;
			}
		} else {
			this.setState({
				status: 'unreachable'
			});
		}
	}

	login() {
		axios.post('http://localhost:3000/user/login', {
			username: this.state.username,
			password: this.state.password
		})
			.then(this.handleSuccess.bind(this))
			.catch(this.handleError.bind(this));
	}

	render() {
		const { classes } = this.props;

		switch (this.state.status) {
			default:	// If status is an unhandled case, we show the ready variant by default
			case 'ready':
				return (
					<form onSubmit={(e) => { this.login.bind(this); e.preventDefault(); }}>
						<Grid container spacing={24}>
							<Grid item sm={12}>
							<TextField style={{ width: '100%' }} name="username" value={this.state.username} onChange={this.handleChange.bind(this)} placeholder="Username"/>
							</Grid>
							<Grid item sm={12}>
								<TextField style={{ width: '100%' }} name="password" value={this.state.password} onChange={this.handleChange.bind(this)} placeholder="Password" type="password" />
							</Grid>
							<Grid item sm={12}>
								<Button variant="contained" type="submit" color="primary" className={classes.button} onClick={this.login.bind(this)}>
									Submit
								</Button>
							</Grid>
						</Grid>
					</form>
				);
			case 'success':
				return (
					<div>
						You logged in! Wow :D
					</div>
				);
			case 'unreachable':
				return (
					<div>
						Users API unreachable. Try again later.
					</div>
				);
			case 'banned':
				return (
					<div>
						This user is banned.
					</div>
				);
		}
	}
}

export default withStyles(styles)(LoginForm);
