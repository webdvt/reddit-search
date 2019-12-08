import React, {useState} from 'react';
import './App.css';
import deepOrange from '@material-ui/core/colors/deepOrange';
import orange from '@material-ui/core/colors/orange';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/layout/Header';
import SearchForm from './components/SearchForm';
import Posts from './components/Posts';
import Spinner from './components/Spinner';

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: orange,
  }
});

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5),
  },
  input: {
    padding: theme.spacing(1, 0),
  },
  box: {
    padding: theme.spacing(2),
  }
}));


const App = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search Reddit
  const search = async (searchTerm = '', searchLimit = 10, sortBy = 'new') => {
    setLoading(true);
    setPosts([]);
    try {
      const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`);
      const data = await response.json();
      const result = data.data.children.map(data => data.data);
      setPosts(result);
      setLoading(false);

    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
       <Header/>
        <Container maxWidth="lg" className={classes.box}>
          <SearchForm classes={classes} search={search}/>
        </Container>
        <Container maxWidth="lg" className={classes.box}>
          {loading && <Spinner/>}
          {posts.length > 0 && <Posts posts={posts}/>}
        </Container>
      </ThemeProvider>
    </div>
  )
};

export default App;


