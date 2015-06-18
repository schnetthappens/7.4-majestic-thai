(function(){
  'use strict';

  $(document).ready(function(){
    $('.content').append(JST.menu());
    $('.content').append(JST.order());
  });
})();
