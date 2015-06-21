import ajaxConfig from './ajax-config';

import {MenuListCollection} from '/models/menuListCollection';
import MenuListView from '/views/menuListView';

import OrderView from '/views/orderView';
import Order from './models/order';

(function(){
  'use strict';

  $(document).ready(function(){

    var items = new MenuListCollection();
    var order = new Order();

      items.fetch().then(function(){
        var menuListView = new MenuListView({
            order: order,
            collection: items
            });
          $('.menu-container').append(menuListView.el);

      });

    var orderView = new OrderView();
    $('.order-container').append(orderView.el);

  });
})();
