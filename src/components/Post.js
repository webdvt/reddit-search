import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    width: 390,
    margin: '1em',
  },
  media: {
    height: 200,
  },
  cardContent: {
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
  },
  cardAction: {
    paddingLeft: '1em',
    paddingRight: '1em',
  },
  button: {
    padding: 0,
    margin: 0
  },
  divider: {
    marginTop: '1em',
    marginBottom: '1em'
  }
});

const Post = ({ post }) => {
  const classes = useStyles();
  const { preview } = post;
  const img = preview ? preview.images[0].source.url.replace(/amp;/g, '')
    : 'https://i.redd.it/2qy7unjo2j331.png';

  // Truncate Text
  const truncateText = (text, limit = 15) => {
    const shortend = text.indexOf(' ', limit);
    return shortend === -1 ? text : text.substring(0, shortend);
  };

  return (
    <div>
      <Card className={classes.card}>
        <Button style={{ backgroundColor: 'transparent' }}
                disableFocusRipple={true}
                disableRipple={true}
                className={classes.button}
                target="_blank"
                href='/'>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title='This is title of the image'
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Post 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error esse ipsum porro provident quae.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Button>

        <CardActions className={classes.cardAction}>
          <Grid
            justify="space-between"
            container
          >
            <Grid item>
              <Button target="_blank" href='/' size="medium" color="primary">
                Read More
              </Button>
            </Grid>
            <Grid item>
              <Typography style={{ paddingTop: '0.5em' }}
                          color='secondary'
                          variant='body2'>
                <strong>Subreddit: </strong> subreddit
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;