'use strict'

require('./adContainerBinding');
require('history');
var $ = require('jquery'),
    ko = require('knockout'),
    _ = require('underscore'),
    hammer = require('hammerjs'),
    prefetchImages = require('../../lib/prefetchImages');

var BaseGalleryViewModel = require('../../modules/_baseGallery/baseGalleryViewModel');

module.exports = GalleryViewModel;

function GalleryViewModel(config) {
  BaseGalleryViewModel.call(this);

  // Sets slides from gallery Config in template
  this.config = config;

  this.slides(config.slides);

  this.totalSlideCount(config.galleryTotalSlideCount);

  this.currentSlideIndex(config.initialSlideIndex || 0);

  this.galleryUrl = ko.observable(config.galleryUrl);

  this.title = ko.observable(config.galleryTitle);

  this.description = ko.observable(config.galleryDescription);

  this.isNextButtonActive = ko.observable(true);

  this.pauseGallery = ko.observable(false);

  // Includes adTimer module for use
  // when an ad slide is present
  this.adTimer = require('./adTimer').create();

  this.skipAdWaitDuration = 2000;

  // create array of slides without ads
  // so we can track current slide number
  // to display in gallery without
  // it including ad slides.
  this.slidesWithoutAds = _.reject(this.slides(), {type: 'ad'});

  this.currentSlideNum = ko.pureComputed(function () {
      return _.indexOf(this.slidesWithoutAds, this.currentSlide()) + 1;
  }, this);

  // prefetch the next slide image
  this.currentSlide.subscribe(function(newSlide) {
    if (!this.isLastSlide()) {
      prefetchImages(this.slides()[this.currentSlideIndex() + 1].image);
    }
  }, this);

  // Title Card
  // Just a representation of the gallery
  // Uses the first image of the gallery
  // and a "start" text
  this.isTitleCardVisible = ko.observable(this.config.isTitleCard);
  this.isTitleCardVisible.subscribe(function(newValue) {
    if (newValue && config.updateHistory) {
      History.pushState(null, null, config.galleryUrl);
    }
  }, this);


  this.removeTitleCard = function() {
    this.isTitleCardVisible(false);
  }.bind(this);


  // Subscribe to the `isActive` variable
  // changing within the adTimer module
  this.adTimer.isActive.subscribe(function(newValue) {
    this.isNextButtonActive(!newValue);
    this.pauseGallery(newValue);
  }, this);

  // checks if current slide is or isn't
  // an ad. Not the best name but works currently.
  this.isNotAdSlide = ko.pureComputed(function () {
      return this.currentSlide().type != 'ad';
  }, this);

  // When it is an ad
  // if initiaties adTimer, passes duration to run
  // ad module
  this.isNotAdSlide.subscribe(function(newValue) {
    if (newValue) return;

    this.adTimer.start(this.skipAdWaitDuration);
  }, this);


  // Captures value of logic when the gallery is being viewed.
  // Encapsulates a state we toggle visibility for
  // EX: social share and gallery caption
  this.isGalleryActive = ko.computed(function() {
    return this.isNotAdSlide() && !this.isTitleCardVisible();
  }, this);



  // Adds class to slide wrapper
  // with appropriate media type class
  // these classes may adjust appearance
  // for particular media. EX: video includes video
  // wrapper styles for responsive videos
  this.slideMediaType = ko.pureComputed(function() {
    if (!this.currentSlide()) return;

    if (this.currentSlide().type == 'video') {
      return 'gallery__media--video';
    } else if (this.currentSlide().type == 'image') {
      return 'gallery__media--image'
    } else {
      return 'gallery__media--ad'
    }

  }, this);

  // update template based on slide type
  this.templateType = function(slide) {
    if (slide.type == 'image') {
      return 'image-slide-template';
    } else if (slide.type == 'video') {
      return 'video-slide-template';
    } else if (slide.type == 'ad') {
      return 'ad-slide-template';
    }
  };

  // Add to the base method to
  // check if the gallery is paused
  // due to adTimer running
  this.gotoPrevSlide = function() {
    if (this.pauseGallery()) return;

    if (this.isFirstSlide()) {
      this.isTitleCardVisible(true);
    } else {
      BaseGalleryViewModel.prototype.gotoPrevSlide.call(this);
    }

  }

  this.gotoNextSlide = function() {
    if (this.isTitleCardVisible()) {
      this.removeTitleCard();
      return;
    }

    // remove title card if it is displayed when user goes to next slide
    if (this.isLastSlide() && config.nextContentUrl) {
      // navigate to next gallery url
      window.location = config.nextContentUrl;
    } else {
      // this checks state of next button
      // should only be 'false' when an ad is present
      if (this.pauseGallery()) return;
      BaseGalleryViewModel.prototype.gotoNextSlide.call(this);
    }
  };

  this.imageCredit = function() {
    if (this.currentSlide.imageCredit == '' || his.currentSlide.imageCredit == null || his.currentSlide.imageCredit == 'undefined') return false;

    return this.currentSlide().imageCredit;
  }

  if (config.updateHistory) {
    require('./updateHistoryBehavior').call(this);
  }
}

GalleryViewModel.prototype = Object.create(BaseGalleryViewModel.prototype);
