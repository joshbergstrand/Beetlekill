 $(document).on('scroll', function () {
     if ($(document).scrollTop() > 1700) {
         $('.mirror .nudge-group').removeClass('mirror-nudge-transition');
     } else {
         $('.mirror .nudge-group').addClass('mirror-nudge-transition');
     }

 });

 $(document).on('scroll', function () {
     if ($(document).scrollTop() > 2500) {
         $('.window .nudge-group').removeClass('window-nudge-transition');
     } else {
         $('.window .nudge-group').addClass('window-nudge-transition');
     }

 });

 $(document).on('scroll', function () {
     if ($(document).scrollTop() > 3000) {
         $('.door .nudge-group').removeClass('door-nudge-transition');
     } else {
         $('.door .nudge-group').addClass('door-nudge-transition');
     }

 });