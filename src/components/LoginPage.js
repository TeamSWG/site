import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MediaCard from './MediaCard';
import LoginFormContainer from '../containers/LoginFormContainer';

const styles = {

};

function LoginPage(props) {
	return (
		<div>
			<MediaCard imageUrl="images/screenShot0034.jpg" headline="Login">
				<LoginFormContainer />
			</MediaCard>
		</div>
	);
}

export default withStyles(styles)(LoginPage);