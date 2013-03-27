Partial API Mocking
================================================================================

Partial API Mocking in Javascript for use in UX design and rapid prototyping.

This uses sinon to partially mock the api. This lets us use our full api
while mocking new endpoints or new versions of responses. This way we can
drive ahead on new features and consider the json a contract that the api
must fulfill.

See the mock_routes file to supply an array of url/response pairings that
this module will provide. The [Sinon library][sinon] is going to intercept
the XHR request and provide those responses. The app is never going to know
that the data didn't come from your ajax provider of choice.

[sinon]: http://sinonjs.org/
