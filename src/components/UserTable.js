import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import Username from './Username';

const styles = theme => ({
	rightIcon: {
		marginLeft: theme.spacing.unit,
	},
});

class UserTable extends React.Component {

	constructor(props) {
		super(props);

		this.fetchUsers();

		this.state = {
			users: undefined,
			status: undefined,
			anchorEl: null,
		};
	}

	componentWillReceiveProps(oldProps, newProps) {
		this.fetchUsers();
	}

	handleSuccess(response) {
		let enableEditing = false;
		let users = response.data;

		if (this.props.userId) {
			let user = users.filter(candidate => candidate._id === this.props.userId)[0];

			if (user) {
				enableEditing = user.accessLevel !== 'player';	// TODO extremely crude
			}
		}

		this.setState({
			users,
			status: 'success',
			enableEditing
		});
	}

	handleError(error) {
		console.log(error);
		this.setState({
			status: 'unreachable'
		});
	}

	fetchUsers() {
		axios.get('http://game.teamswg.com:3000/users')
			.then(this.handleSuccess.bind(this))
			.catch(this.handleError.bind(this));
	}

	handleAccessLevelClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleAccessLevelClose = (accessLevel, user) => {
		this.setState({ anchorEl: null });
		const editedUserId = user._id;

		if (!editedUserId) {
			return;
		}

		axios.post('http://localhost:3000/secure/user/accessLevel/' + editedUserId, {
			token: this.props.token,
			accessLevel
		}).then(response => {
			let usersCopy = [...this.state.users];
			let editedUser = usersCopy.filter(candidate => candidate._id === editedUserId)[0];
			let index = usersCopy.indexOf(editedUser);

			editedUser.accessLevel = accessLevel;

			usersCopy.splice(index, 1, editedUser);

			this.setState({
				users: usersCopy
			});
		}).catch(error => {
			console.log(error);
		})
	};

	handleBanChange = user => {
		const editedUserId = user._id;
		const reverse = !user.banned

		axios.post('http://localhost:3000/secure/user/ban/' + editedUserId, {
			token: this.props.token,
			banned: reverse
		}).then(response => {
			let usersCopy = [...this.state.users];
			let editedUser = usersCopy.filter(candidate => candidate._id === editedUserId)[0];
			let index = usersCopy.indexOf(editedUser);

			editedUser.banned = reverse;

			usersCopy.splice(index, 1, editedUser);

			this.setState({
				users: usersCopy
			});
		}).catch(error => {
			console.log(error);
		})
	};

	deleteUser(userId) {
		axios.post('http://localhost:3000/secure/user/delete/' + userId, {
			token: this.props.token
		}).then(response => {
			this.setState({
				users: this.state.users.filter(candidate => candidate._id !== userId)	// The new users list excludes the deleted user
			});
		}).catch(error => {
			console.log(error);
		})
	}

	renderRows = () => {
		const { classes } = this.props;

		return this.state.users.map(currentUser => {
			return (
				<TableRow>
					<TableCell>
						<Username user={currentUser}/>
					</TableCell>
					<TableCell>
						{this.state.enableEditing ?
							<div>
								<Button
									aria-owns={this.state.anchorEl ? 'accessLevelMenu_' + currentUser._id : null}
									aria-haspopup="true"
									onClick={this.handleAccessLevelClick}
									disabled={this.props.userId === currentUser._id}
								>
									{currentUser.accessLevel}
      				  </Button>
								<Menu
									id={'accessLevelMenu_' + currentUser._id}
									anchorEl={this.state.anchorEl}
									open={Boolean(this.state.anchorEl)}
									onClose={this.handleAccessLevelClose}
								>
									<MenuItem onClick={() => this.handleAccessLevelClose('player', currentUser)}>player</MenuItem>
									<MenuItem onClick={() => this.handleAccessLevelClose('csr', currentUser)}>csr</MenuItem>
									<MenuItem onClick={() => this.handleAccessLevelClose('qa', currentUser)}>qa</MenuItem>
									<MenuItem onClick={() => this.handleAccessLevelClose('dev', currentUser)}>dev</MenuItem>
								</Menu>
							</div>
							:
							currentUser.accessLevel
						}
					</TableCell>
					
					<TableCell>
						{this.state.enableEditing ?
							<Switch checked={currentUser.banned} onChange={() => this.handleBanChange(currentUser)} disabled={this.props.userId === currentUser._id}/>
							:
							currentUser.banned ? 'Yes' : 'No'
						}
					</TableCell>

					{this.state.enableEditing &&
						<TableCell>
							<Button variant="contained" color="secondary" className={classes.button} disabled={this.props.userId === currentUser._id} onClick={this.deleteUser.bind(this, currentUser._id)}>
								Delete
        				<DeleteIcon className={classes.rightIcon} />
							</Button>
						</TableCell>
					}
				</TableRow>
			);
		});
	}

	render() {
		switch (this.state.status) {
			default:	// If status is an unhandled case, we show the ready variant by default
			case 'ready':
				return (
					<CircularProgress />
				);
			case 'success':
				return (
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									Username
								</TableCell>
								<TableCell>
									Access Level
								</TableCell>
								<TableCell>
									Banned
								</TableCell>
								{this.state.enableEditing &&
									<TableCell>
										Actions
									</TableCell>
								}
							</TableRow>
						</TableHead>
						<TableBody>
							{this.renderRows()}
						</TableBody>
					</Table>
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

export default withStyles(styles)(UserTable);