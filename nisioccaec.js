import React, { useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent },
  { path: '/contact', component: ContactComponent },
  // Add more routes as needed
];

const App = () => {
  const routeComponents = useMemo(() => {
    return routes.map(({ path, component }, index) => (
      <Route key={index} path={path} component={component} />
    ));
  }, [routes]);

  return (
    <Router>
      <Switch>
        {routeComponents}
      </Switch>
    </Router>
  );
};

export default App;
