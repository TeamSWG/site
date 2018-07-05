import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MediaCard from './MediaCard';

const styles = {

};

function HomePage(props) {
	const {classes} = props;

	return (
		<div>
			<Grid container spacing={24}>
				<Grid item sm={4}>
					<MediaCard imageUrl="images/screenShot0034.jpg" headline="Alpha Release" content="interesting content about the release :-)"/>
				</Grid>
				<Grid item sm={4}>
                	<MediaCard imageUrl="images/reptile.jpg" headline="Lizzzuuurdd" content="interesting content"/>
                </Grid>
				<Grid item sm={4}>
                	<MediaCard imageUrl="images/reptile.jpg" headline="Test Server Status" content="Offline :-("/>
                </Grid>
			</Grid>
		</div>
	);
}

export default withStyles(styles)(HomePage);