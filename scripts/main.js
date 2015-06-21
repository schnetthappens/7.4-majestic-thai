import ajaxConfig from './ajax-config';
import {MenuListCollection} from '/models/menuListCollection';
import MenuListView from '/views/menuListView';
import Order from './models/order';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();


    var items = new MenuListCollection();
      items.fetch().then(function(){

        var menuListView = new MenuListView({collection: items});
          $('.menu-container').append(menuListView.el);

      });

  });
})();
