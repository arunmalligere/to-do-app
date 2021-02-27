import React from 'react';
import { Container as MaterialContainer, Typography, CssBaseline } from '@material-ui/core';

type conatinerProps = {
    color?: string;
    height?: string;
}

const Container: React.FC<conatinerProps> = ({ color, height, children }) => {
    color = !!color ? color : '#cfe8fc';
    height = !!height ? height : '100vh';
    return (
        <div>
            <CssBaseline />
            <MaterialContainer maxWidth="md">
                <Typography component="div"
                    style={{
                        backgroundColor: color,
                        height: height,
                    }} >
                    {children}
                </Typography>
            </MaterialContainer>
        </div>
    )
};

export default Container;
