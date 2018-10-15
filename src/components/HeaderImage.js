import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	headerImage: {
		width: '100%',
    height: '200px',
    backgroundImage: 'url("/images/header.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    boxShadow: 'inset 0 -10px 10px -10px black'
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