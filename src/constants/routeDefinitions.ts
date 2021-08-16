import ROUTES from './routes';

import { CreateToDo, LandingPage, LandingPageLayout } from '../components'

export const topLevelRoutes: RouteDefinition[] = [
    { component: LandingPage, exact: true, path: ROUTES.HOME, layout: LandingPageLayout },
    { component: CreateToDo, exact: true, path: ROUTES.CREATETODO, layout: LandingPageLayout },
]; 