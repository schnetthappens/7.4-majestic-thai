import {FoodListCollection} from '/models/foodListCollection';
import FoodListView from '/views/foodListView';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();

    var foods = new FoodListCollection();
      foods.fetch().then(function(){
        console.log(foods);

      });

    // var foodListView = new FoodListView();
    //   $('.menu-container').append(foodListView.el);

    // $('.content').append(JST.order());


  });
})();
