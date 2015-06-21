import Order from '/models/order';


export default Backbone.View.extend({
  template: JST['menu-item'],
  tagName: 'li',
  className: 'menu-item',

  events: {
    'click .price': 'addItemToOrder'
  },

  initialize: function(){
    this.render();
  },

  render:function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addItemToOrder: function(e){
    console.log(this.model);

  }

});
