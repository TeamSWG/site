import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {

};

class Discord extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<iframe src="https://discordapp.com/widget?id=465088685197623296&theme=light" style={{'box-shadow': '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'}} width="100%" height="100%" allowtransparency="true" frameborder="0"></iframe>
		);
	}
}

export default withStyles(styles)(Discord);