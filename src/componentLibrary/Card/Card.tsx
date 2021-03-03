import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Avatar,
    Card as MaterialCard,
    CardHeader,
    CardContent
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { theme } from '../../styles';

const useStyles = makeStyles({
    root: {
        width: "60%",
        margin: "auto",
        backgroundColor: "#ECEFF0",
    },
    avatar: {
        backgroundColor: red[500],
    },
    header: {
        width: "100%",
    },
    title: {
        display: "flex",
        color: theme.palette.primary.dark,
        fontSize: '1.25rem',
        fontWeight: 600,
    },
    subHeader: {
        display: "flex",
        color: theme.palette.primary.light,
        fontWeight: 500,
    },
    separator: {
        display: "flex",
        width: "95%",
        border: "1px solid lightblue",
    }
});

type cardProps = {
    title: string;
    subHeader: string;
    content: ReactNode;
    cardAction: JSX.Element;
};

const Card: React.FC<cardProps> = ({ content, title, subHeader, cardAction }) => {
    const classes = useStyles();
    return (
        <div>
            <MaterialCard className={classes.root}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    title={<span className={classes.title}>{title}</span>}
                    subheader={<span className={classes.subHeader}>{subHeader}</span>}
                    action={cardAction}
                />
                <hr className={classes.separator} />
                <CardContent>
                    {content}
                </CardContent>
            </MaterialCard>
        </div>
    )
};

export default Card;

