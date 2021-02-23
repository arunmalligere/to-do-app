import React from 'react';
import { Route } from 'react-router-dom'


export const renderRoutes = (routes: RouteDefinition[]) => (
    routes.map(({ path, exact, component: COMPONENT, layout: LAYOUT = React.Fragment }, index) => (
        < Route key={index} {...{ exact, path }} >
            <LAYOUT>
                <COMPONENT />
            </LAYOUT>
        </ Route>
    ))
);