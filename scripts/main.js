import {FoodListCollection} from '/models/foodListCollection';
import FoodListView from '/views/foodListView';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();

    var foods = new FoodListCollection();
      foods.fetch().then(function(){

        var foodListView = new FoodListView({collection: foods});
          $('.menu-container').append(foodListView.el);

      });



    $('.content').append(JST.order());


  });
})();
