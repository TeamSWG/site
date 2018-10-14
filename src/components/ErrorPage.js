import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		margin: "0 auto",
	}
});

function ErrorPage(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root}>
			<Typography component="h1" variant="headline">
				An error has occured
			</Typography>
			<Typography component="h2" variant="subheading">
				{props.subheading}
			</Typography>
			<Typography component="p">
				{props.children}
			</Typography>
		</Paper>
	);
}

export default withStyles(styles)(ErrorPage);