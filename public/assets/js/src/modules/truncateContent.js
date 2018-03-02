'use strict';
var $ = require('jquery');

module.exports = function(el) {
  var $el = $(el),
      elHeight = $el.height(),
      options = $el.data('options'),
      maxHeight = options.maxHeight || 150,
      containerClass = options.containerClass || 'truncateContent__container',
      containerSel = '.' + options.containerClass || '.truncateContent__container',
      btnClass = options.btnClass || 'truncateContent__btn',
      btnText = options.btnText || 'view more',
      $btn = buildBtn();

  if (elHeight > maxHeight) {
    initTruncatedContent();
  }

  function initTruncatedContent() {
    $el.addClass('is-closed');
    $el.height(maxHeight);
    $el.append($btn);

    $btn.on('click', 'a', function(e) {
      e.preventDefault();
      openContentContainer();
    });
  }

  function buildBtn() {
    var btn = $('<div>').addClass(containerClass)
              .append(
                $('<a>').attr('href', '#')
                        .addClass(btnClass)
                        .text(btnText)
              );

    return btn;
  }

  function openContentContainer() {
    $el.removeClass('is-closed');
    $el.height(elHeight);
    $btn.remove();
  }
};