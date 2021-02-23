import ROUTES from './routes';

import { LandingPage } from '../components'

export const topLevelRoutes: RouteDefinition[] = [
    { component: LandingPage, exact: true, path: ROUTES.HOME },
]; 