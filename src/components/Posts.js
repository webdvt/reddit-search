import React from 'react';
import Post from './Post';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));

const Posts = ({width, posts}) => {
  const getGridListCols = () => {
    if (isWidthUp('xl', width)) {
      return 3;
    } else if (isWidthUp('lg', width)) {
      return 3;
    } else if (isWidthUp('md', width)) {
      return 2;
    } else {
      return 1;
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight='auto' cols={getGridListCols()}>
        {posts.map(post => (
          <GridListTile key={post.title}>
            <Post post={post} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withWidth()(Posts);