require( [ '../script/config/require.js' ], function() {
  require( [ 'ko-config'], function() {
    require( ['knockout'], function( ko ) {

      function dropdownDataNormalize(data) {
        this.optionsText  = data.label;
        this.optionsValue = data.value;
      }
      var viewModel            = {};
      viewModel.favoriteDay    = ko.observable();
      viewModel.ajaxDayInput   = ko.observableArray([
                                  new dropdownDataNormalize({label:'Sun', value:'Sunday'}),
                                  new dropdownDataNormalize({label:'Mon', value:'Monday'}),
                                  new dropdownDataNormalize({label:'Tue', value:'Tuesday'}),
                                  new dropdownDataNormalize({label:'Wed', value:'Wednesday'}),
                                  new dropdownDataNormalize({label:'Thu', value:'Thursday'}),
                                  new dropdownDataNormalize({label:'Fri', value:'Friday'}),
                                  new dropdownDataNormalize({label:'Sat', value:'Saturday'})                                  
                                 ]);
      ko.applyBindings( viewModel );
    } );
  } );
} );
  
  