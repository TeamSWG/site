import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import CreateUserPage from "./CreateUserPage";
import InstallPage from "./InstallPage";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import NotFoundPage from "./NotFoundPage";
import ShowUsersPage from "./ShowUsersPage";

const styles = {

};

function RootPage(props) {
	const { classes } = props;

	return (
		<div>
			<BrowserRouter>
				<NavBar title="TeamSWG">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/install" component={InstallPage} />
						<Route exact path="/createUser" component={CreateUserPage} />
						<Route exact path="/users" component={ShowUsersPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</NavBar>
			</BrowserRouter>
		</div>
	);
}

export default withStyles(styles)(RootPage);