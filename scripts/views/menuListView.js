
import MenuCategoryView from './menuCategoryView';

export default Backbone.View.extend({

  className: 'menu-list',


  initialize: function(options){
    this.render(options);
  },


  render: function(options){
    this.renderChildren(options);
    // console.log(this.children);
  },

  //creates children views
  renderChildren: function(options){
    _.invoke(this.children || [], 'remove');

    this.order = options.order;

        var groupedCategories =  _.each(this.collection.groupBy('category'), function(items, category) {
            // console.log(items, category);

          var groupedFoods = new Backbone.Collection(items)
          var view = new MenuCategoryView({
            category: this.category,
            collection: groupedFoods,
            order: this.order
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
