import Order from '/models/order';


export default Backbone.View.extend({
  template: JST['menu-item'],
  tagName: 'li',
  className: 'menu-item',

  events: {
    'click .price': 'addItemToOrder'
  },

  initialize: function(options){
    this.render();
    this.order = options.order;
  },

  render:function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addItemToOrder: function(){
    console.log(this.model);
    this.order.add(this.model);
    console.log(this.order);
  }

});
