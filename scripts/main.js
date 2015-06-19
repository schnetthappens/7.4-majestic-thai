import ajaxConfig from './ajax-config';
import {FoodListCollection} from '/models/foodListCollection';
import FoodListView from '/views/foodListView';
import Order from './models/order';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();

    var foods = new FoodListCollection();
    var order = new Order();
      foods.fetch().then(function(){

        var foodListView = new FoodListView({collection: foods});
          $('.menu-container').append(foodListView.el);

      });



    // $('.content').append(JST.order());


  });
})();
