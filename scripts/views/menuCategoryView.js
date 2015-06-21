
import MenuItemView from './menuItemView';


export default Backbone.View.extend({
  template: JST['menu-category'],
  // tagName: 'div',
  className: 'menu-category',

  events: {
    'click .show-category': 'toggleCategory'

  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template({category: this.category}));
    // $('.menu-category').empty().append(this.$el);
    this.renderChildren();
  },


  toggleCategory: function(e){
    console.log(e.target);
    $('.category-list').slideToggle('slow', function(){});
    //$(this).siblings().next('.category-list').slideUp();

  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new MenuItemView({
        model: child,
        category: this.category
      });

      this.$('.category-list').append(view.el);
      return view;
    }.bind(this));

    return this;

  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this.arguments);

  }
});
