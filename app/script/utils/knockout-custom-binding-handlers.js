define(['knockout', '../uicomponent/jquery.placeholder'], function(ko) {
  
  ko.bindingHandlers.placeholderBinding = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      if( ko.unwrap(valueAccessor) ) {
        $(element).customPlaceholder();
      }
    }
  };

});
