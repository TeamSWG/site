import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.headline}
          </Typography>
          <Typography component="p">
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);