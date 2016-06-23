import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './components/app';
import NoMatch from './components/common/NoMatch';

import Dashboard from './components/dashboard/Dashboard';
import Graph from './components/graph/Graph';

export default (
    <Route path="/" component={App}>
        <Route component={Dashboard}>
            <IndexRoute component={Graph}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
);
