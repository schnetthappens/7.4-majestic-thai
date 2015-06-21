
export default Backbone.View.extend({
  template: JST.order,
  tagName: 'section',
  className: 'your-order',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  }

});
