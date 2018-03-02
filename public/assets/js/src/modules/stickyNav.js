'use strict';

var $ = require('jquery');
var Headroom = require('headroom.js');
require('waypoints');
require('waypointsSticky');

module.exports = function(el) {
  var $el = $(el),
      $header = $('.article__header'),
      $body = $('.article__body'),
      $description = $("meta[property='og:description']").attr("content"),
      $scrollTarget;

      var mediaWidth = $el.data('media-width');

  // exit early if this is a basic navigation
  // that doesn't need any of the fancy stuff
  if ($el.hasClass('basic-nav')) return false;

  if ($el.hasClass('site-header--alt') && window.matchMedia("(min-width: 1024px)").matches) return false;


  var media = window.matchMedia('(min-width: ' + mediaWidth + ')');

  media.addListener(function(data) {

  });

  // at this point, we know we'll have a "fancy nav"
  // we need to know if a DOM element has been selected as the
  // scroll point in which the "fancy nav" kicks in.
  // If it does exist, we set the offset
  // otherwise, we just set it to 25% of the viewable window.
  if ($($el.data('scroll-target')).length){
    $scrollTarget = $($el.data('scroll-target')).height() + $($el.data('scroll-target')).offset().top;
  } else {
    $scrollTarget = $(window).height() * .25;
  }


  // Assign medium trigger to $scrollTarget value
  // for nav to kick in.
  var smallHeightTrigger = $header.outerHeight(true),
      mediumHeightTrigger = $scrollTarget;

  var sticky = new Waypoint.Sticky({
    element: $el[0],
    stuckClass: 'is-fixed'
  });

  $( window ).load(function() {

    var headroomOptions = {
      offset: smallHeightTrigger / 2,
      onUnpin: function() {
        $el.find('.search-bar').removeClass('is-active');
      }
    };

    if (window.matchMedia("(min-width: 400px)").matches) {
      $.extend(headroomOptions, {
          offset: mediumHeightTrigger - 75
      });
    }

    var headroom = new Headroom(document.querySelector('.site-header__menu-bar'), headroomOptions);

    headroom.init();

    var $article_title = $('.article__header-wrap .article-title').text();

    $('.site-header__title').html($article_title);

    if (typeof CKL !== 'undefined' && CKL.related_content !== undefined && CKL.related_content.length > 0) {
      $('.action-bar__link').attr('href', CKL.related_content[0].url);
    }
  });
};