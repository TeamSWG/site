import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

});

class CharacterTable extends React.Component {


	renderRows = () => {
		return this.props.characters.map(character => {
			return (
				<TableRow>
					<TableCell>
						{character.id}
					</TableCell>
					<TableCell>
						{character.name}
					</TableCell>
					<TableCell>
						{character.race}
					</TableCell>
				</TableRow>
			);
		});
	}

	render() {
		return (
			<div>
				{this.props.characters.length > 0 ?
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									Object ID
								</TableCell>
								<TableCell>
									Name
								</TableCell>
								<TableCell>
									Model
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.renderRows()}
						</TableBody>
					</Table>
					:
					<Typography>None</Typography>
				}
			</div>
		);
	}
}

export default withStyles(styles)(CharacterTable);