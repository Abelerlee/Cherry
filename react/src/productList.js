/**
 * Created by hasee on 2016/6/13.
 */

var FooterModule = require('./component/FooterModule');
var HeaderModule = require('./component/HeaderModule');
var SortModule = require('./component/SortModule');
var ScrollModule = require('./component/ScrollModule');

ReactDOM.render(
    <div>
        <HeaderModule back={false} btn="go-cart">商品列表</HeaderModule>
        <SortModule ></SortModule>
        <ScrollModule></ScrollModule>
        <FooterModule active="2">底部</FooterModule>
    </div>,document.getElementById("app"));




