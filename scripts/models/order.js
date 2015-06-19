
import {FoodListCollection} from './foodListCollection';

export default Backbone.Model.extend({

  initialize: function(){
    //create a new collection keep track of the items
    this.foods = new FoodListCollection();
    this.listenTo()
  },


  render: function(){


  },





});
