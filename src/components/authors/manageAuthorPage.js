"use strict";

var React = require("react");
var AuthorForm = require("./authorForm");

var manageAuthorPage = React.createClass({
	render: function() {
		return (

			<AuthorForm />

		);
	}
});

module.exports = manageAuthorPage;