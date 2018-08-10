import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CreateUserForm from './CreateUserForm';
import Discord from './Discord';
import MediaCard from './MediaCard';
import LoginFormContainer from '../containers/LoginFormContainer';
import UserTableContainer from '../containers/UserTableContainer';

const styles = {

};

function HomePage(props) {
	return (
		<div>
			<Grid container spacing={16}>
				<Grid item sm={6}>
					<MediaCard imageUrl="http://digitalspyuk.cdnds.net/16/39/480x240/landscape-1475228749-lego-movie-awesome-gif.gif" headline="Alpha Release">
						<p>interesting content about the release :-)</p>
					</MediaCard>
				</Grid>

				<Grid item sm={6}>
					<Discord />
				</Grid>

				<Grid item sm={6} md={4}>
					<MediaCard imageUrl="images/screenShot0034.jpg" headline="Login">
						<LoginFormContainer />
					</MediaCard>
				</Grid>
				<Grid item sm={6} md={4}>
					<MediaCard imageUrl="images/reptile.jpg" headline="Sign Up Today!">
						<CreateUserForm />
					</MediaCard>
				</Grid>
				<Grid item sm={6} md={4}>
					<MediaCard imageUrl="images/reptile.jpg" headline="Users">
						<UserTableContainer/>
					</MediaCard>
				</Grid>
			</Grid>
		</div>
	);
}

export default withStyles(styles)(HomePage);