
import {FoodListCollection} from './foodListCollection';

var Order = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: "https://api.parse.com/1/classes/Order",

  defaults: {
    name: ''
  },

  initialize: function(){
    //create a new collection keep track of the items
    this.foods = new FoodListCollection();

    //trigger all foods events on myself
    this.listenTo(this.foods, 'all', this.trigger.bind(this));
  },

  add: function(models, options){
    this.foods.add(models, options);
  },

  remove: function(models, options) {
    this.foods.remove(models, options);
  },

  toJSON: function(){
    return_.extend({}, this.attributes, {
      foods: this.foods.map(function(food){
        return {
          "_type": "Pointer",
          "className": "Foods",
          "objectId": foods.id
        };
      })
    });
  }

});

export default {Order};
