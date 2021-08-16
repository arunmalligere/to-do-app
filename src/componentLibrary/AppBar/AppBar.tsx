import React from 'react';
import {
    AppBar as MaterialAppBar,
    Box,
    IconButton,
    Toolbar,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle as AccountIcon } from '@material-ui/icons'

import { ReactComponent as ToDoImg } from '../../assets/undraw/To_do.svg';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        color: '#000',
        height: 72,
    },
    title: {
        // flexGrow: 1,
        marginLeft: theme.spacing(2),
        color: "white",
        fontSize: 45,
        fontStyle: "italic",
        fontFamily: "Times New Roman",
    },
    toolbar: {
        marginBottom: 'auto',
        marginTop: 'auto',
        [theme.breakpoints.only('sm')]: {
            paddingLeft: theme.spacing(1),
        },
    },
    todoImg: {
        margin: 1,
        height: 50,
        width: 50,
    },
    account: {
        marginLeft: "170px",
    }
}));

type appBarProps = {
    title?: string;
};

const AppBar: React.FC<appBarProps> = ({ title, children }) => {
    const classes = useStyles();
    return (
        <>
            <MaterialAppBar className={classes.root} elevation={1}>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <ToDoImg className={classes.todoImg} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    {children}
                    <Box className={classes.account}>
                        <AccountIcon style={{ color: "white", fontSize: 45 }} />
                    </Box>
                </Toolbar>
            </MaterialAppBar>

        </>
    )
};

export default AppBar;
