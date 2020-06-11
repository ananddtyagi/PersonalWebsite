
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export default function Admin() {
    const [isAuthenticated, setAuth] = useState(localStorage.getItem('authenticated'));

      const handleClick = (event) => {
          event.preventDefault();
          localStorage.setItem('authenticated', "no");
          alert(localStorage.getItem('authenticated'))
          window.location.reload(false)
      }

      if (localStorage.getItem('authenticated') === "yes") {
        return (
          <div>
            <p>Welcome</p>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Logout
            </Button>
          </div>
        )
      } else {

        return (
          <Redirect to= '/login'/>
        )
      }


}