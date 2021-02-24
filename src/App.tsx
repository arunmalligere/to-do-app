import React from 'react';
import './App.css';
import ROUTES from './constants/routes';
import { renderRoutes } from './utils/routes';
import { topLevelRoutes } from './constants/routeDefinitions'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {renderRoutes(topLevelRoutes)}
          <Redirect to={ROUTES.HOME} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
