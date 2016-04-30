/**
 * [jQuery-clickout]{@link https://github.com/emn178/jquery-clickout}
 *
 * @version 0.1.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2016
 * @license MIT
 */
(function ($) {
  'use strict';

  function bind(handleObj) {
    var element = $(this);
    var onClickDocument = function (e) {
      if (!$.contains(element[0], e.target)) {
        handleObj.handler.call(element, $.Event('clickout', { target: e.target }));
      }
    };
    handleObj.clickout = onClickDocument;
    $(document).bind('click touchend', onClickDocument);
  }

  function unbind(handleObj) {
    $(document).unbind('click touchend', handleObj.clickout);
  }

  $.event.special.clickout = { add: bind, remove: unbind };

  $.fn.clickout = function (data, fn) {
    return arguments.length > 0 ? this.bind('clickout', data, fn) : this.trigger('clickout');
  };
})(jQuery);
