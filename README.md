Partial API Mocking
================================================================================

Partial API Mocking in Javascript for use in UX design and rapid prototyping.

This uses [Sinon][sinon] to partially mock the api. This lets us use our full
api while mocking new endpoints or new versions of responses. This way we can
drive ahead on new features and consider the JSON fixtures __a contract between
the UI and API__.

See the mock_routes file to supply an array of url/response pairings that
this module will provide. The [Sinon library][sinon] is going to intercept
the XHR request and provide those responses. The app is __never going to know__
that the data didn't come from your ajax provider of choice.

This project uses [RequireJS][require].

## Example

Open the mock.js file, and look inside, you'll see that we are building an
array of urls. The url specifiers can be regular expressions or strings.

    [
      {
        url: /\/projects\/(\d+)/,
        response: projectFixture
      }, {
        url: "/projects",
        response: projectsFixture
      }
    ]

In this example, both `projectFixture` and `projectsFixture` are strings with
JSON responses. When the application makes a request for `/projects/385`, the
fake server will intercept the request, and hand the fixture data back as a
response. Any request not matching the urls in the mock array will continue
to the API for fulfillment.

## TODO

* A full example application

[sinon]: http://sinonjs.org/
[require]: http://requirejs.org/
