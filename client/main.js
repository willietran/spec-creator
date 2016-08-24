import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from './components/app';
import TeamMain from './components/teams/team-main';
import CreateTeam from './components/teams/create-team';
import CreateTemplateTitle from './components/templates/create-template-title';
import TemplateList from './components/templates/template-list';
import CreateTemplateSections from './components/templates/create-template-sections';
import CreateSpecTitle from './components/specs/create-spec-title';
import SpecMain from './components/specs/spec-main';
import CreateAccount from './components/account-handling/create-account';
import Login from './components/account-handling/login';
import TeamSpec from './components/teams/team-spec';
import ViewSpec from './components/specs/view-spec';

// Collections
import { Teams } from '../imports/collections/teams';
import { Templates } from '../imports/collections/templates';
import { Specs } from '../imports/collections/specs';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TeamMain} />
      <Route path="sign-up" component={CreateAccount} />
      <Route path="login" component={Login} />
      <Route path="create-team" component={CreateTeam} />
      <Route path="teams" component={TeamMain} />
      <Route path=":teamId/create-template" component={CreateTemplateTitle} />
      <Route path=":teamId/templates/:templateId" component={CreateTemplateSections} />
      <Route path=":teamId/templates" component={TemplateList} />
      <Route path=":teamId/specs" component={TeamSpec} />
      <Route path=":teamId/create-spec" component={CreateSpecTitle} />
      <Route path=":teamId/specs/:specId/edit" component={SpecMain} />
      <Route path=":teamId/specs/:specId/view" component={ViewSpec} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
