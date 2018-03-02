'use strict';


var $ = require('jquery'),
    _ = require('underscore'),
    HeightToggle = require('./heightToggle');

module.exports = function(el) {
  var $el =$(el),
      toggleTarget = $el.data('toggle-target'),
      toggleTrigger = $el.data('toggle-trigger'),
      activeClass = 'is-open';


      var nutritionList = new HeightToggle($(toggleTarget), $(toggleTrigger));
      nutritionList.close();
      nutritionList.on('open', addActiveClass);
      nutritionList.on('close', removeActiveClass);

    function addActiveClass() {
      $el.addClass(activeClass);
      console.log('open');
    }

    function removeActiveClass() {
      $el.removeClass(activeClass);
      console.log('close');
    }
};

