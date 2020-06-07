import React, { useState, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
return (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);
}

const useStyles = makeStyles((theme) => ({
paper: {
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
},
avatar: {
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
},
form: {
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(1),
},
submit: {
  margin: theme.spacing(3, 0, 2),
},
}));

export default function Admin() {
const classes = useStyles();
const [user, setUser] = useState("")
const [pass, setPass] = useState("")
const handleSubmit = (event) => {
    event.preventDefault();
    console.log({user}.user)
    console.log({pass})
    console.log(process.env.REACT_APP_ADMIN_USER)
    console.log({user}.user === process.env.REACT_APP_ADMIN_USER)
    if ({user}.user === process.env.REACT_APP_ADMIN_USER && {pass}.pass === process.env.REACT_APP_ADMIN_PASS){
      console.log('LOCALE STORAGE STUFF')
    }
    else {
      alert("try again")
    }

}

return (
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Welcome Anand, login here to edit your site.
      </Typography>

      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="user"
          label="User"
          name="user"
          autoComplete="user"
          autoFocus
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
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

      </form>
    </div>
  </Container>
);
}