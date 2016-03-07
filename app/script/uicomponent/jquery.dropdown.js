define( ['jquery'], function($){
  var methods = {
    init: function(options) {
      $(this).each(function(){
        var $this         = $(this),
            $trigger      = $this.find('.dd-trigger'),
            $triggers     = $this.find('.dd-trigger .dd-close-btn'),
            $dropdown     = $this.find('.dd-content'),
            activeClass   = 'active';

        $triggers.click(function() {
          $this.toggleClass(activeClass);
          $dropdown.fadeToggle();
        });

        $this.click(function(event) {
          event.stopPropogation();
        });

        $(document).click(function() {
          if($this.hasClass(activeClass)) {
            $this.toggleClass(activeClass);
            $dropdown.fadeToggle();
          }
        });
      });
    }
  };

  $.fn.dropdown = function(method) {
    if(methods[method]) {
      methods[method].apply(this, Array.prototype.slice.call(arguments,1));
    }
    else if( typeof method === "object" || !method ) {
      methods.init.apply(this, arguments);
    }
    else {
      $.error("Method " + method + " doesn't exist on $.dropdown");
    }
  };
});

