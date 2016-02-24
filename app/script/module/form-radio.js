require( [ '../script/config/require.js' ], function() {
  require( ['ko-config'], function() {
    require( ['knockout'], function( ko ) {
      var viewModel            = {};
      viewModel.likeChocolate  = ko.observable();
      viewModel.voterAge       = ko.observable();
      viewModel.voteFor        = ko.observable();
      ko.applyBindings( viewModel );
    } );
  } );
} );
  
  