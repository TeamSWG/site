import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import UserTableContainer from '../containers/UserTableContainer';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		margin: "0 auto",
	},

	button: {
		marginTop: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
});

class ShowUsersPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			// TODO
		};
	}

	renderUsersTable() {

	}

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Paper className={classes.root}>
					<Typography gutterBottom variant='headline' component='h2'>
						Users
					</Typography>
					<UserTableContainer />
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(ShowUsersPage);