'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    ee = require('event-emitter');

module.exports = HeightToggle;

ee(HeightToggle.prototype);

function HeightToggle(el, toggleTrigger, closeHeight) {
  this.$el = $(el);
  this.isOpen = false;
  this.$toggleTrigger = $(toggleTrigger);
  this.activeClass = 'is-open';
  this.CLOSED_HEIGHT = closeHeight || 0;
  this.initialHeight = this.$el.outerHeight();

  this.attachEvents();
}

HeightToggle.prototype.attachEvents = function() {
  this.$toggleTrigger.on('click', _.bind(this.toggleMenu, this));
};

HeightToggle.prototype.open = function() {
  this.isOpen = true;
  this.$el.addClass(this.activeClass);
  this.$el.height(this.initialHeight);

  this.emit('open', this);
};

HeightToggle.prototype.close = function() {
  this.$el.removeClass(this.activeClass);
  this.$el.height(this.CLOSED_HEIGHT);
  this.isOpen = false;

  this.emit('close', this);
};

HeightToggle.prototype.toggleMenu = function() {
  if (this.isOpen) {
    this.close();
  } else {
    this.open();
  }
};