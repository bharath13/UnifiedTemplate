'use strict';

var $ = require('jquery');
require('waypoints');
require('waypointsSticky');

module.exports = function(el) {
  var $el = $(el),
      mediaWidth = $el.data('init-width') || '1024px',
      media = window.matchMedia('(min-width: ' + mediaWidth + ')'),
      stickyNav;

  if (!media.matches) {
    intitalizeStickyNav();
  }

  media.addListener(function(data) {
    if (data.matches) {
      disableStickyNav();
    } else {
      intitalizeStickyNav();
    }
  });

  function intitalizeStickyNav() {
    stickyNav = new Waypoint.Sticky({
      element: $el[0],
      stuckClass: 'is-fixed'
    });
  }

  function disableStickyNav() {
    stickyNav.destroy();
  }
};