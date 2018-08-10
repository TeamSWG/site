import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { CircularProgress, ListItemText } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import CharacterTable from './CharacterTable';

const styles = theme => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
		margin: "0 auto",
	},
});

class UserProfilePage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: undefined
		};

		this.fetchUserData();
	}

	fetchUserData() {
		axios.get('http://localhost:3000/user/' + this.props.match.params.userId)
			.then(response => {
				this.setState({
					user: response.data
				})
			})
			.catch(error => {
				console.log(error);
			});
	}

	renderCharacterListItems() {
		return this.state.user.characters.map(character => {
			return (
				<ListItem>
					<ListItemText primary={character.name}/>
				</ListItem>
			);
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Paper className={classes.root}>
					{this.state.user ?
						<div>
							<Typography gutterBottom variant='headline' component='h2'>
								{this.state.user.username}
							</Typography>
							<Typography gutterBottom variant='subheading' component='h3'>
								Characters
							</Typography>
							<CharacterTable characters={this.state.user.characters} />
						</div>
						:
						<CircularProgress/>
					}
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(UserProfilePage);