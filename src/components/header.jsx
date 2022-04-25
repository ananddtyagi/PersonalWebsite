import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import useScrollTrigger from '@mui/material/useScrollTrigger';



function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
      });
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles((theme) => ({


}));

export default function Header(props) {
    const classes = useStyles();

    return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h6" >
                Scroll to elevate App bar
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}

