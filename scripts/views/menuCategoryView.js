
// import MenuListView from './menuListView';
import MenuItemView from './menuItemView';
// import MenuListCollection from '../models/menuListCollection';

export default Backbone.View.extend({
  template: JST['menu-category'],
  tagName: 'ul',
  className: 'menu-category',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template({category: this.category}));
    this.renderChildren();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new MenuItemView({
        model: child,
        category: this.category
      });

      this.$el.append(view.el);
      return view;
    }.bind(this));

    return this;

  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this.arguments);

  }
});
