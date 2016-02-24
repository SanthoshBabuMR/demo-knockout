require( [ '../script/config/require.js' ], function() {
  require( [ 'ko-config'], function() {
    require( ['knockout'], function( ko ) {
      var viewModel      = {};
      viewModel.userName = ko.observable();
      ko.applyBindings( viewModel );
    } );
  } );
} );
  
  