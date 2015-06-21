
var Order = Backbone.Model.extend({
  idAttribute: 'objectId',
  // urlRoot: "https://api.parse.com/1/classes/Order",

  defaults: {
    item: '',
    price: 0,
    category: '',
  },

  initialize: function(){

    //create a new collection keep track of the items
    this.order = new Backbone.Collection();

    //trigger all foods events on myself
    this.listenTo(this.order, 'all', this.trigger.bind(this));
  },

  add: function(models, options){
    this.order.add(models, options);
  }
  //
  // remove: function(models, options) {
  //   this.items.remove(models, options);
  // },
  //
  // toJSON: function(){
  //   return_.extend({}, this.attributes, {
  //     items: this.items.map(function(item){
  //       return {
  //         "_type": "Pointer",
  //         "className": "Items",
  //         "objectId": item.id
  //       };
  //     })
  //   });
  // }

});

export default Order;
