import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	headerImage: {
		width: '100%',
    height: '200px',
    backgroundImage: 'url("/images/star-wars-galaxy-of-heroes-3.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
	}
};

class HeaderImage extends React.Component {

	render() {
		const { classes } = this.props;
		
		return (
			<div className={classes.headerImage}></div>
		);
	}
}

export default withStyles(styles)(HeaderImage);