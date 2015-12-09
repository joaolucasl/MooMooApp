var React = require('react');
var DOM = require('react-dom');
var PostsApp = require('./components/PostsApp.jsx');


var initialState = JSON.parse(document.getElementById('init').innerHTML);

DOM.render(
  <PostsApp posts={initialState} />,
  document.getElementById('Posts-App')
);


// ===== jQuery section for UI components functions ========

// Sidebar toggle initialisation
$(".button-collapse").sideNav();
