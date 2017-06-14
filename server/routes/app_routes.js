require("babel-register")({
	presets: ['es2015', 'react']
})

var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var match = ReactRouter.match;
var RouterContext = ReactRouter.RouterContext;
var fs = require('fs');

var app = express()

var routes = require('../../client/components/routes');
// function(){
// 	var MovieFormBlock = require('../../client/components/add/movie_form_block');
// 	// var SearchBarBlock = require('../../client/components/search/search_bar_block');
// 	return(
//         `<div>
//           <MainNav/>
//           <div id='body'>
//             <Route path='/add_movie' component={MovieFormBlock}/>
//             <Route path='/search_movie' component={SearchBarBlock}/>
//           </div>
//         </div>`
// 	);
// };

var render = app.get('*', (req, res) => {
	console.log(ReactRouter.createRoutes(routes));
  match({routes: ReactRouter.createRoutes(routes), location: req.url}, (err, redirect, props) => {
  	console.log(err, redirect, props);
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      res.status(200).send(ReactDOMServer.renderToString(React.createElement(RouterContext, props)));
    } else {
      res.status(404).send('Not Fund')
    }
  });
});

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>Vacas Library</title>
    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css>
    <link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css>
    <link rel=stylesheet href=/assets/css/style.css>
    <div id=app>${appHtml}</div>
    <script>
    (function(){
      var ef = function(){};
      window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
    }());
    </script>
    <script src=//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js></script>
    <script src=//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js></script>
    <script src=//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js></script>
    <script src=//cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js></script>
    <script src=https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js></script>
    <script type=text/javascript src=./bundle.js></script>
  `
}


module.exports = render;