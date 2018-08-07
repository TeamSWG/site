import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';
import Typography from '@material-ui/core/Typography';

const styles = {

};

function ErrorPage(props) {
	const {classes} = props;

	return (
		<div>
			<Typography component="h1" variant="headline">
				An error has occured
			</Typography>
			<Typography component="h2" variant="subheading">
				{props.subheading}
			</Typography>
			<Typography component="p">
				{props.children}
			</Typography>
		</div>
	);
}

export default withStyles(styles)(ErrorPage);