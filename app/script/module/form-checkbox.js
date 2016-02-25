require( [ '../script/config/require.js' ], function() {
  require( [ 'ko-config'], function() {
    require( ['knockout'], function( ko ) {
      var viewModel                = {};
      viewModel.interestedInColors = ko.observable();
      viewModel.favoriteColor      = ko.observableArray();
      ko.applyBindings( viewModel );
    } );
  } );
} );
  
  