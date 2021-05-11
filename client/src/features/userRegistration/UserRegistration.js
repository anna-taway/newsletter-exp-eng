import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { newUserRegistration } from './userRegistrationAction';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';

const initialState = {
  username: '',
};

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  box: {
    width: '100%'
  }
}));

const UserRegistration = () => {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(initialState);

  const isLoading = useSelector(({registration}) => registration.isLoading);
  const registrationStatus = useSelector(({registration}) => registration.status);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });

  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { username, password } = newUser;

    const newRegistration = {
      username: username,
      password: password
    };
    dispatch(newUserRegistration(newRegistration));
  };

  return (
    <React.Fragment>
      <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={newUser.username}
          onChange={handleOnChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      <Box className={classes.box} mt={6}>
        {isLoading ? <></> : (
          registrationStatus === 'success' ? 
            <Alert severity="success">Successful registration</Alert> : 
          <Alert severity="error">Please fill the field</Alert>) 
        }
      </Box>
    </React.Fragment>
  );
}

export default UserRegistration;




