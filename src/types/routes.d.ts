type RouteDefinition = {
    path: string;
    exact?: boolean;
    component: React.FC;
    layout?: React.FC;
}