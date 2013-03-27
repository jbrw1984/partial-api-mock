//
// Routes for Data Mocking in the UI
// =============================================================================
//
// We're using Sinon to intercept routes specified here. The responses should
// be strings and the urls may be either strings or regex.
//
// * Author: [Craig Davis](craig@there4development.com)
// * Since: 3/22/2013
//
// -----------------------------------------------------------------------------
//
define([
  "text!data/project.json",
  "text!data/projects.json"
], function (
  projectFixture, projectsFixture
) {
  "use strict";

  return [
    {
      url: /\/projects\/(\d+)/,
      response: projectFixture
    }, {
      url: "/projects",
      response: projectsFixture
    }
  ];

});

/* End of file mock_routes.js */
