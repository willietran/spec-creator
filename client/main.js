import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from './components/app';
import TeamMain from './components/teams/team-main';
import TeamList from './components/teams/team-list';
import CreateTeam from './components/teams/create-team';
import CreateTemplateTitle from './components/templates/create-template-title';
import TemplateList from './components/templates/template-list';

// Collections
import { Teams } from '../imports/collections/teams';
import { Templates } from '../imports/collections/templates';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TeamList} />
      <Route path="create-team" component={CreateTeam} />
      <Route path="teams" component={TeamMain} />
      <Route path=":teamId/create-template" component={CreateTemplateTitle} />
      <Route path=":teamId/templates" component={TemplateList} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
