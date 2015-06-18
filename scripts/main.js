(function(){
  'use strict';

  $(document).ready(function(){
    $('.content').prepend(JST.menu());
    $('.content').append(JST.order());
  });
})();
