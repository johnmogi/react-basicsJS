react JS:
hooks
mobx



import { Router, Link, BrowserRouter, NavLink } from 'react-router-dom';
NavLink inside Router,
redirect inside switch
            <Switch>
          <Redirect to="/home" path="/" exact />
          <Route path="/home" component={Homepage} exact />
          <Route path="/games/:cat" component={Category} />
          <Route path="" component={NotFound} exact /> 
        </Switch>