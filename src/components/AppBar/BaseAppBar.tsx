import React from 'react';
import { Box, Tab, Tabs } from '@material-ui/core'
import AppBar from '../../componentLibrary/AppBar';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    tab: {
        color: "white",
        fontSize: 20,
        fontStyle: "bold",
        fontFamily: "Times New Roman",
    }
});

type baseAppBarProps = {
    tabs?: TabsType[];
    handleTabSelected?: (_: any, selectedTab: string) => void;
};

const BaseAppBar: React.FC<baseAppBarProps> = ({ tabs, handleTabSelected }) => {
    const classes = useStyles();
    return (
        <AppBar title="TO-DO">
            <Box mr="auto" ml="auto">
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleTabSelected}
                    value={false}
                >
                    {tabs && (
                        tabs.map(tab => (
                            <Tab className={classes.tab} key={tab.value} {...tab} />
                        ))
                    )}

                </Tabs>
            </Box>
        </AppBar>
    );
};

export default BaseAppBar;
