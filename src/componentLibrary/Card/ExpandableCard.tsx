import React, { useMemo, useState } from 'react';
import Card from './Card';

import { Collapse, Fade } from '@material-ui/core';
import {
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';

type expandableCardProps = {
    title: string;
    subHeader: string;
    content: JSX.Element;
};

const ExpandableCard: React.FC<expandableCardProps> = ({ title, subHeader, content: cardContent }) => {
    const [expanded, setExpanded] = useState(true);
    const cardAction =
        expanded ?
            (
                <ExpandLessIcon
                    color="primary"
                    onClick={() => setExpanded(!expanded)}
                >
                    Collapse
                </ExpandLessIcon>
            ) : (
                <ExpandMoreIcon
                    color="primary"
                    onClick={() => setExpanded(!expanded)}
                >
                    Expand
                </ExpandMoreIcon>
            );
    const content = useMemo(() => {
        return (
            <>
                <Fade in={!expanded}>
                    <Collapse in={!expanded}>
                        {title}
                    </Collapse>
                </Fade>
                <Fade in={expanded}>
                    <Collapse in={expanded}>
                        {cardContent}
                    </Collapse>
                </Fade>
            </>
        );
    }
        , [expanded, cardContent]);
    return (
        <div>
            <Fade in={true}>
                <Collapse in={true}>
                    <Card {...{ title, subHeader, content, cardAction }} />
                </Collapse>
            </Fade>
        </div>
    )
};

export default ExpandableCard;
