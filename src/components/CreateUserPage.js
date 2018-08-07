import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CreateUserForm from './CreateUserForm';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 500,
    margin: "0 auto",
  },
});

function CreateUserPage(props) {
	const {classes} = props;

	return (
		<Paper className={classes.root}>
			<CreateUserForm/>
		</Paper>
	);
}

export default withStyles(styles)(CreateUserPage);