import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent'

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		margin: "0 auto",
	},

	button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class InstallPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			activeStep: 0,
		};
	}

	handleNext = () => {
		this.setState(state => ({
			activeStep: state.activeStep + 1,
		}));
	};

	handleBack = () => {
		this.setState(state => ({
			activeStep: state.activeStep - 1,
		}));
	};

	handleReset = () => {
		this.setState({
			activeStep: 0,
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Paper className={classes.root}>
					<Typography gutterBottom variant='headline' component='h2'>
						Installation steps
						</Typography>
					<Typography component='p'>
						The following steps will get you set up with the launcher that both ProjectSWG and TeamSWG use.
						If you already have the launcher installed, you can go ahead and play!
					</Typography>

					<Stepper activeStep={this.state.activeStep} orientation="vertical">
						<Step>
							<StepLabel>
								Java Runtime Environment (JRE)
							</StepLabel>
							<StepContent>
								<Typography component='p'>
								The launcher needs a JRE in order to run. You can download one <a target='_blank' href='http://www.oracle.com/technetwork/java/javase/downloads/index.html' rel='noopener noreferrer'>here</a>.
								If you plan on developing, you might want to get a JDK instead of just the JRE.
								</Typography>
								<Button
									variant="contained"
									color="primary"
									onClick={this.handleNext}
									className={classes.button}
								>
									Next
									</Button>
							</StepContent>
						</Step>

						<Step>
							<StepLabel>
								Downloading the launcher
							</StepLabel>
							<StepContent>
								<Typography component='p'>
									Download the launcher <a target='_blank' href='http://login1.projectswg.com/launcher/Launcher.jar' rel='noopener noreferrer'>here</a>.
								</Typography>
								<Button
									onClick={this.handleBack}
									className={classes.button}
								>
									Back
								</Button>
								<Button
									variant="contained"
									color="primary"
									onClick={this.handleNext}
									className={classes.button}
								>
									Next
									</Button>
							</StepContent>
						</Step>

						<Step>
							<StepLabel>
								Running the launcher
							</StepLabel>
							<StepContent>
								<Typography component='p'>
									You should be able to run the downloaded file simply by double-clicking on it.
								</Typography>
								<Button
									onClick={this.handleBack}
									className={classes.button}
								>
									Back
								</Button>
								<Button
									variant="contained"
									color="primary"
									onClick={this.handleNext}
									className={classes.button}
								>
									Next
									</Button>
							</StepContent>
						</Step>

						<Step>
							<StepLabel>
								Configuring path for TeamSWGs Update Server
							</StepLabel>
							<StepContent>
								<Typography component='p'>
									You'll land on the Servers tab when starting the launcher. Before downloading anything,
									go to the Settings tab and scroll down to Update Servers. Choose TeamSWG in the dropdown,
									go to Local Path and browse for the directory you want the CU game client to be stored in.
								</Typography>
								<Button
									onClick={this.handleBack}
									className={classes.button}
								>
									Back
								</Button>
							</StepContent>
						</Step>
					</Stepper>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(InstallPage);