'use strict';


var $ = require('jquery'),
    _ = require('underscore'),
    HeightToggle = require('./heightToggle');

module.exports = function(el) {
  var $el =$(el),
      toggleTarget = $el.data('toggle-target'),
      toggleTrigger = $el.data('toggle-trigger'),
      $menuItems = $el.find(toggleTarget);

  $menuItems.each(function() {
    var $this = $(this),
        menuInitialHeight = $this.find('.menu-group__link').outerHeight(),
        menuItem = new HeightToggle(this, $this.find(toggleTrigger), menuInitialHeight);

    menuItem.close();
    menuItem.on('open', handleMenuOpen);
  });

  var currentActiveMenuItem;
  function handleMenuOpen(menuItem) {
    if (currentActiveMenuItem && currentActiveMenuItem != menuItem) {
      currentActiveMenuItem.close();
    }

    currentActiveMenuItem = menuItem;
  }
};

