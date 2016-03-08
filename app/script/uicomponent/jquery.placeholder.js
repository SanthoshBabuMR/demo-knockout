define( ['jquery', 'modernizr'], function($){
  var methods = {
    init: function(options) {
      if(!Modernizr.input.placeholder) {
        $this = $(this);

        $this.focus( function() {
          var $input = $(this);
          if( $input.val() === $input.attr('placeholder') ) {
            $input.removeClass('placeholder');
            $input.val('');
          }
        });

        $this.blur( function() {
          var $input = $(this);
          if( $input.val() === '' || $input.val() === $input.attr('placeholder') ) {
            $input.addClass('placeholder');
            $input.val($input.attr('placeholder'));
          }
        });

        $this.blur();

        $this.parents('form').submit(function() {
          if( $this.val() === $this.attr('placeholder') ) {
            $input.removeClass('placeholder');
            $input.val(''); 
          }
        });
      }
      return this;
    }
  };

  $.fn.customPlaceholder = function(method) {
    if(methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments,1));
    }
    else if( typeof method === "object" || !method ) {
      return methods.init.apply(this, arguments);
    }
    else {
      $.error("Method " + method + " doesn't exist on $.customPlaceholder");
    }
  };

});

