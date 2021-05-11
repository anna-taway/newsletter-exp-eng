import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                A production with EE and EBQ
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Contact
            </Typography>
            </footer>
        </React.Fragment>
    )
}

export default Footer;