import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import CreateUserForm from './CreateUserForm';
import Discord from './Discord';
import MediaCard from './MediaCard';
import Milestone from './Milestone';
import LoginFormContainer from '../containers/LoginFormContainer';
import UserTableContainer from '../containers/UserTableContainer';

const styles = {

};

function HomePage(props) {
	return (
		<div>
			<Grid container spacing={16}>
				<Grid item sm={4}>
					<MediaCard imageUrl="images/welcome.jpg" headline="Welcome">
						<Typography component="p">The project is in the early stages of development.</Typography>
					</MediaCard>
				</Grid>

				<Grid item sm={6} md={4}>
					<MediaCard imageUrl="images/signup.jpg" headline="Sign Up Today">
						<Typography component="p">
							Click <Link to="/createUser">here</Link> to sign up!
						</Typography>
					</MediaCard>
				</Grid>

				<Grid item sm={4}>
					<Discord />
				</Grid>

				<Grid item sm={6} md={4}>
					<MediaCard imageUrl="images/milestone.jpg" headline="Current Milestone">
                    	<Milestone/>
                    </MediaCard>
				</Grid>

			</Grid>
		</div>
	);
}

export default withStyles(styles)(HomePage);