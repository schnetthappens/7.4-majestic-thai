
import MenuItemView from './menuItemView';


export default Backbone.View.extend({
  template: JST['menu-category'],
  // tagName: 'div',
  className: 'menu-category',

  events: {
    'click .show-category': 'toggleCategory'

  },

  initialize: function(options){
    this.category = options.category;
    this.order = options.order;
    this.render(options);
  },

  render: function(options){
    this.$el.html(this.template({category: this.category}));
    this.renderChildren(options);
  },


  toggleCategory: function(e){
    // console.log(e);
    $(this.el).closest('.menu-category').find('.category-list').slideToggle('slow', function(){});
  },

  renderChildren: function(options){
    _.invoke(this.children || [], 'remove');

    this.order = options.order;

    this.children = this.collection.map(function(child) {
      var view = new MenuItemView({
        model: child,
        collection: this.collection,
        order: this.order
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
