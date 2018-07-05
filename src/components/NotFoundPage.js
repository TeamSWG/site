import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ErrorPage from "./ErrorPage"

const styles = {

};

function NotFoundPage(props) {
	const {classes} = props;

	return (
		<ErrorPage subheading="Page does not exist">
			This is not the page you are looking for!
		</ErrorPage>
	);
}

export default withStyles(styles)(NotFoundPage);