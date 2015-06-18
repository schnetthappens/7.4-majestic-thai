
export default Backbone.View.extend({
  template: JST['menu-item'],

  tagName: 'ul',
  className: 'menu-list',


  initialize: function(){
    this.render();
  },


  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  }

});
