var React = require('react');
var DOM = require('react-dom');
var PostsApp = require('./components/PostsApp.jsx');
var initialState = JSON.parse(document.getElementById('init').innerHTML);

var overlay = $('.loading-overlay');

var PostsAppDOM = DOM.render(
  <PostsApp posts={initialState} />,
  document.getElementById('Posts-App'),
    function () {
      setTimeout(function (){
        console.log('[LOG] Waiting to detach');
        overlay.detach();
      },1000);
    }
);

// ===== jQuery section for UI components functions ========

// Sidebar toggle initialisation
$('.button-collapse').sideNav();
