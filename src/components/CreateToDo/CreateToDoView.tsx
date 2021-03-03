import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import { Container, ExpandableCard } from '../../componentLibrary';
import CreateToDoForm from './CreateToDoForm';

type createToDoViewProps = {
    title: string;
    subHeader: string;
    handleSubmit: (values: any) => void;
};

const useStyles = makeStyles({
    cardContainer: {
        paddingTop: "10vh",
        height: "100%",
    }
});

const CreateToDoView: React.FC<createToDoViewProps> = ({ title, subHeader, handleSubmit }) => {
    const classes = useStyles();
    return (
        // <Container height={window.innerHeight.toString() + "px"}>
        <div className={classes.cardContainer}>
            <CreateToDoForm {...{ title, subHeader, handleSubmit }} />
        </div>
        // </Container>
    )
};

export default CreateToDoView;
