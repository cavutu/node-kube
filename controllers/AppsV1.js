'use strict';

var utils = require('../utils/writer.js');
var AppsV1 = require('../service/AppsV1Service');

module.exports.listAppsV1DeploymentForAllNamespaces = function listAppsV1DeploymentForAllNamespaces (req, res, next) {
  var _continue = req.swagger.params['continue'].value;
  var fieldSelector = req.swagger.params['fieldSelector'].value;
  var includeUninitialized = req.swagger.params['includeUninitialized'].value;
  var labelSelector = req.swagger.params['labelSelector'].value;
  var limit = req.swagger.params['limit'].value;
  var pretty = req.swagger.params['pretty'].value;
  var resourceVersion = req.swagger.params['resourceVersion'].value;
  var timeoutSeconds = req.swagger.params['timeoutSeconds'].value;
  var watch = req.swagger.params['watch'].value;
  AppsV1.listAppsV1DeploymentForAllNamespaces(_continue,fieldSelector,includeUninitialized,labelSelector,limit,pretty,resourceVersion,timeoutSeconds,watch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
