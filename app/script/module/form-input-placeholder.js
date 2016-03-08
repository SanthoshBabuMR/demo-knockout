require( [ '../script/config/require.js' ], function() {
  require( [ 'ko-config'], function() {
    require( ['knockout', 'knockout-binding-handlers'], function( ko ) {
      var viewModel               = {};
      viewModel.interimUserName   = ko.observable();
      viewModel.userName          = ko.observable();
      viewModel.interimUserName.subscribe( function(v) {
      	viewModel.userName(v);
      });
      ko.applyBindings( viewModel );
    } );
  } );
} );
  
  