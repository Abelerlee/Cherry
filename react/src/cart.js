/**
 * Created by hasee on 2016/6/17.
 */
require('../css/iconfont/iconfont.css');
require('../css/base.css');
require('../css/public.css');
require('../css/cart.css');
var React = require('react');
var ReactDOM = require('react-dom');
var HeaderModule = require('./component/HeaderModule');
var FooterModule = require('./component/FooterModule');
var CartModule = require('./component/CartModule');


ReactDOM.render(
    <div id="app">
        <HeaderModule back={false} btn="go-cart">购物车</HeaderModule>
        <CartModule></CartModule>

        <FooterModule active="3"></FooterModule>
    </div>,document.body);