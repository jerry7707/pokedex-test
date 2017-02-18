angular = require('angular');
require('angular-ui-bootstrap');
require('angular-modal-service');

app = angular.module('App', ['angularModalService','ui.bootstrap']);
require('./factory');
require('./directives');
require('./controllers');
