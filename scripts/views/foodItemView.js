
export default Backbone.View.extend({
  template: JST['menu-item'],
  tagName: 'li',
  className: 'menu-item',

  initialize: function(){
    this.render();
  },


  render:function(){
    this.$el.html(this.template());

  }
  
});
