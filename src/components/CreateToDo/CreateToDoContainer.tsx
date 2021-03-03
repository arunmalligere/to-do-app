import React, { useCallback } from 'react';
import CreateToDoView from './CreateToDoView';

import { format } from 'date-fns';



const CreateToDoContainer: React.FC = () => {
    const subHeader = format(new Date(), 'eee MMM/dd/yyyy hh:mm:ss z');
    const title = "New Task";
    const handleSubmit = (values: any) => {
        console.log('values', values);
    };

    return (<CreateToDoView {...{ title, subHeader, handleSubmit }} />);
};

export default CreateToDoContainer;
