import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import FlagIcon from '@material-ui/icons/Flag';

const styles = {

};

class Milestone extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			status: undefined,
			milestone: undefined
		};

		this.fetchMilestones();
	}

	fetchMilestones() {
		axios.get('https://api.github.com/repos/teamswg/ditto/milestones?state=open')
			.then(this.handleSuccess.bind(this))
			.catch(this.handleError.bind(this));
	}

	handleSuccess(response) {
		let milestones = response.data;
		let milestone = milestones[0];

		this.setState({
			status: 'success',
			milestone
		});
	}

	handleError(error) {
		console.log(error);
		this.setState({
        	status: 'error'
        });
	}

	completePercent() {
		// Calculate how complete the milestone is
		let totalIssues = this.state.milestone.open_issues + this.state.milestone.closed_issues;
		let percent = (this.state.milestone.open_issues * 100) / totalIssues;

		return 100 - percent;
	}

	render() {
		return (
			this.state.status === 'success'
			?
			<div>
				<Grid container spacing={16}>
					<Grid item sm={2}>
						<Avatar>
							<FlagIcon/>
						</Avatar>
					</Grid>
					<Grid item sm={10}>
						<Typography gutterBottom variant="subheading" component="h3">{this.state.milestone.title}</Typography>
                        <Typography component="p">{this.state.milestone.description}</Typography>
                        <LinearProgress variant="determinate" value={this.completePercent()} />
					</Grid>
				</Grid>
			</div>
			:
			<CircularProgress />
		);
	}
}

export default withStyles(styles)(Milestone);