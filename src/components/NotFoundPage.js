import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ErrorPage from "./ErrorPage"

const styles = {

};

function NotFoundPage(props) {
	const {classes} = props;

	return (
		<ErrorPage subheading="Page does not exist">
			<img src="images/not_found.png"/>
		</ErrorPage>
	);
}

export default withStyles(styles)(NotFoundPage);