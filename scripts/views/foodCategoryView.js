
import FoodItemView from './foodItemView';
import FoodListCollection from '../models/foodListCollection';

export default Backbone.View.extend({
  template: JST['menu-category'],
  tagName: 'ul',
  className: 'menu-category',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.renderChildren();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');
    this.children = this.collection.map((child) => {
      var view = new FoodItemView({
        model: child,
        collection: this.collection
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
