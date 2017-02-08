/**
 * Created by hasee on 2016/6/13.
 */
var fnBase = require('./lib/fnBase');
var ReactBridge = require('./lib/ReactBridge');
var HeaderModule = require('./component/HeaderModule');
var DetailModule = require('./component/DetailModule');
ReactDOM.render(
    <div>
        <HeaderModule back={true} btn="go-cart">商品列表</HeaderModule>
        <DetailModule goodsId={fnBase.request("pId")}  data={[1,2,3]}></DetailModule>

    </div>,document.getElementById("app"));




