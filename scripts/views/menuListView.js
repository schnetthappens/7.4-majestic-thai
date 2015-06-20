
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

        this.children = this.collection.map(function(child) {
          var view = new MenuCategoryView({
            model: child,
            collection: this.collection
          });
          this.$el.append(view.el);
          return view;
        }.bind(this));

        //each over the collection and give me all food items sorted by category
        _.each(this.collection.groupBy('category'), function(item, category) {
            console.log(item,category);
          })

        return this;
      },

      remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this, arguments);
    }
});
