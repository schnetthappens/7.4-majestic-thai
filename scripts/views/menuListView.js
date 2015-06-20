
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

        this.children = _.each(this.collection.groupBy('category'), function(category, item) {
            console.log(category, item);
          });
          //   var view = new MenuCategoryView({
          //     category: category
          //   });
          //   this.$el.append(view.el);
          //   return view;
          // }.bind(this));


        return this;
      },

      remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this, arguments);
    }
});
