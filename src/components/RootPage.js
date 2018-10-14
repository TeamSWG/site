import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import CreateUserPage from "./CreateUserPage";
import InstallPage from "./InstallPage";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import NotFoundPage from "./NotFoundPage";
import ShowUsersPage from "./ShowUsersPage";
import UserProfilePage from './UserProfilePage';
import LoginPage from './LoginPage';
import HeaderImage from './HeaderImage';

const styles = {

};

function RootPage(props) {
	return (
		<div>
			<BrowserRouter>
			<div>
				<HeaderImage/>
				<NavBar title="TeamSWG">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/install" component={InstallPage} />
						<Route exact path="/createUser" component={CreateUserPage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/users" component={ShowUsersPage} />
						<Route exact path="/user/:userId" component={UserProfilePage} />
						<Route component={NotFoundPage} />
					</Switch>
				</NavBar>
			</div>
			</BrowserRouter>
		</div>
	);
}

export default withStyles(styles)(RootPage);