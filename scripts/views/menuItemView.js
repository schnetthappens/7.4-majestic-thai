import Order from '/models/order';


export default Backbone.View.extend({
  template: JST['menu-item'],
  tagName: 'li',
  className: 'menu-item',

  // events: {
  //   'click .price': 'addFoodToOrder'
  // },

  initialize: function(){
    this.render();
  },

  render:function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addFoodToOrder: function(e){
    // e.preventDefault();
    // console.log('test');
  }

});
