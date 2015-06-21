
import MenuCategoryView from './menuCategoryView';

export default Backbone.View.extend({

  className: 'menu-list',


  initialize: function(){
    this.render();
  },


  render: function(){
    this.renderChildren();
    // console.log(this.children);
  },

  //creates children views
  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

        var groupedCategories =  _.each(this.collection.groupBy('category'), function(items, category) {
            // console.log(items, category);

          var groupedFoods = new Backbone.Collection(items)
          var view = new MenuCategoryView({
            category: category,
            collection: groupedFoods
          });

          this.$el.append(view.el);
          return view;
        }.bind(this));


        return this;
      },

      remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this, arguments);
    }
});
