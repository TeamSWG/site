import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
	button: {
		margin: 0,
		float: 'right'
	}
});

class CreateUserForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username: undefined,
			password: undefined,
			usernameTaken: undefined
		};
	}

	handleChange(event) {
		const { target: { name, value } } = event;
		this.setState(() => ({ [name]: value }))
	}

	handleSuccess(response) {
		switch (response.status) {
			case 200:
				this.setState({
					status: 'success'
				});
				break;
		}
	}

	handleError(error) {
		if (error.response) {
			switch (error.response.status) {
				case 409:
					this.setState({
						usernameTaken: true
					});
					break;
			}
		} else {
			this.setState({
				status: 'unreachable'
			});
		}
	}

	createUser() {
		axios.post('http://game.teamswg.com:3000/user/create', {
			username: this.state.username,
			password: this.state.password	// TODO hash
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
					<form onSubmit={(e) => { this.createUser.bind(this); e.preventDefault(); }}>
						<Grid container spacing={24}>
							<Grid item sm={12}>
								<FormControl style={{ width: '100%' }} className={classes.formControl} error={this.state.usernameTaken} aria-describedby="name-error-text">
									<TextField style={{ width: '100%' }} name="username" value={this.state.username} onChange={this.handleChange.bind(this)} placeholder="Username"/>
									{this.state.usernameTaken && <FormHelperText id="name-error-text">Username taken</FormHelperText>}
								</FormControl>
							</Grid>
							<Grid item sm={12}>
								<TextField style={{ width: '100%' }} name="password" value={this.state.password} onChange={this.handleChange.bind(this)} placeholder="Password" type="password" />
							</Grid>
							<Grid item sm={12}>
								<Button variant="contained" color="primary" type="submit" className={classes.button} onClick={this.createUser.bind(this)}>
									Submit
								</Button>
							</Grid>
						</Grid>
					</form>
				);
			case 'success':
				return (
					<div>
						User has successfully been created.
					</div>
				);
			case 'unreachable':
				return (
					<div>
						Users API unreachable. Try again later.
					</div>
				);
		}
	}
}

export default withStyles(styles)(CreateUserForm);