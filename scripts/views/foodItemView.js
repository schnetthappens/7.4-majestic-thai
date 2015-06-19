
export default Backbone.View.extend({
  template: JST['menu-item'],
  tagName: 'li',
  className: 'menu-item',


  events: {
    'click .price': 'addItem'

  },

  initialize: function(){
    this.render();
  },

  render:function(){
    this.$el.html(this.template(this.model.toJSON()));

  },

  addItem: function(){
    console.log(this.model);
  }

});
