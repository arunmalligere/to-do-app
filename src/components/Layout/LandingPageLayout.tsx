import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar } from '../../components'

const useStyles = makeStyles({
    children: {
        marginTop: "72px",
        height: 'auto',
    }
})

const LandingPageLayout: React.FC = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar />
            <div className={classes.children}>
                {children}
            </div>
        </>
    )
};

export default LandingPageLayout;
