(function() {
  'use strict';

  eventsApp.filter('durations', function() {
    return function(duration) {
      switch(duration) {
        case 1:
          return 'Half day';
          break;
        case 2:
          return '1 Hour';
        break;
        case 3:
          return 'Half Day';
        break;
        case 4:
          return 'Full Day';
        break;
        default:
          break;
      }
    }
  });
})();
