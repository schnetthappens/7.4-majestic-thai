
var FoodListCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/Food",
  idAttribute: 'objectID',

  parse: function(response){
    return response.results;
  }

});

export default {FoodListCollection};
