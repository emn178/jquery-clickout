/*
 * jQuery-clickout v0.1.0
 * https://github.com/emn178/jquery-clickout
 *
 * Copyright 2015, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function($, undefined) {
  'use strict';

  function bind(handleObj) {
    var element = $(this);
    var onClickDocument = function(e) {
      if (!$.contains(element[0], e.target)) {
        handleObj.handler.call(element, jQuery.Event('clickout', {target:e.target}));
      }
    };
    handleObj.clickout = onClickDocument;
    $(document).bind('click', onClickDocument);
  }

  function unbind(handleObj) {
    $(document).unbind('click', handleObj.clickout);
  }

  $.event.special.clickout = { add: bind, remove: unbind };

  $.fn.clickout = function( data, fn ) {
    return arguments.length > 0 ?
      this.bind( 'clickout', data, fn ) :
      this.trigger( 'clickout' );
  };
})(jQuery);
