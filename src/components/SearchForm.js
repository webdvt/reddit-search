import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, MenuItem, Paper } from '@material-ui/core';

const sortByOptions = [
  {
    value: 'new',
    label: 'Latest',
  },
  {
    value: 'relevance',
    label: 'Relevance',
  },
];

const limitByOptions = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 30,
    label: '30',
  },
];

const SearchForm = ({classes, search}) => {

  const handleOnSubmit = (e) => {
    // ...
  };

  return (
    <Paper className={classes.container}>
      <form noValidate autoComplete="off">
        <div>
          <Typography variant="h4">
            🔍 Search
          </Typography>
          <div className={classes.input}>
            <TextField
              fullWidth={true}
              id="standard-required"
              label="Search Term"
              placeholder="Enter your search term.." />
          </div>
          <div className={classes.input}>
            <TextField
              id="standard-select-sortBy"
              select
              label="Sort By"
              fullWidth={true}
              helperText="How would you like to search?"
            >
              {sortByOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.input}>
            <TextField
              id="standard-select-sortBy"
              select
              label="Limit"
              fullWidth={true}
              placeholder='Limit'
              helperText="How many post would you like to see?"
            >
              {limitByOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button fullWidth={true} variant="outlined" color='primary' onClick={() => handleOnSubmit()}>Search</Button>
        </div>
      </form>
    </Paper>
  );
};

export default SearchForm;