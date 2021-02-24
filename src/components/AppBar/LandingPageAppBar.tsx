import React, { ReactComponentElement } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    NoteAdd as CreateToDoIcon,
    ListAlt as ToDoListIcon
} from '@material-ui/icons';

// import { ReactComponent as CreateToDo } from '../../assets/undraw/createToDo.svg';
import ROUTES from '../../constants/routes';
import BaseAppBar from './BaseAppBar'
import { useHistory } from 'react-router-dom';
import { orange, yellow } from '@material-ui/core/colors';
import { yellow900 } from 'material-ui/styles/colors';

const useStyles = makeStyles({
    icon: {
        height: "70px",
        width: "70px",
    }
});

const LandingPageAppBar: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleTabSelected = (_: any, newTab: string) => {
        console.log('newTab', newTab);
        history.push(newTab);
    };

    const tabs: TabsType[] = [
        {
            label: "ToDo List",
            icon: <ToDoListIcon style={{ color: "white", fontSize: 35 }} />,
            value: ROUTES.HOME,
        },
        {
            label: "Create ToDo",
            icon: <CreateToDoIcon style={{ color: "white", fontSize: 35 }} />,
            value: ROUTES.CREATETODO,
        },
    ];
    return (
        <>
            <BaseAppBar tabs={tabs} handleTabSelected={handleTabSelected} />
        </>
    )
};

export default LandingPageAppBar;
