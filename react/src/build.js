/**
 * Created by hasee on 2016/6/14.
 */
require('../css/iconfont/iconfont.css');
require('../css/base.css');
require('../css/public.css');
require('../css/cart.css');
require('../css/list.css');
require('../css/login.css');
require('../css/detail.css');
require('../css/swiper-3.3.1.min.css');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBridge = require('./lib/ReactBridge');

var HeaderModule = require('./component/HeaderModule');
var FooterModule = require('./component/FooterModule');

var CartModule = require('./component/CartModule');

var MineModule = require('./component/MineModule');

var DetailModule = require('./component/DetailModule');

var LoginModule = require('./component/LoginModule');

var SortModule = require('./component/SortModule');

var ScrollModule = require('./component/ScrollModule');

var AppShow= React.createClass({
    getDefaultProps:function(){
        return {
            page:"ProListModule"
        }
    },
    getInitialState:function(){
        window.location.hash.replace("#","")||(window.location.hash = this.props.page);
        return{
            page:window.location.hash.replace("#",""),
        }
    },
    detailGoodsID:"1",
    componentWillMount:function(){
        window.onhashchange=function(){
            this.setState({
                page:window.location.hash.replace("#","")
            })

        }.bind(this);

        ReactBridge.reg("setGoodsID",function(id){
            this.detailGoodsID = id;
        }.bind(this))
    },
    render:function(){
        switch(this.state.page){
            case "LoginModule":
                return (
                    <div id="loginPage">
                        <HeaderModule>开心摇摇用户登录</HeaderModule>
                        <LoginModule></LoginModule>
                        <FooterModule active="5">底部</FooterModule>
                    </div>
                );
                break;
            case "MineModule":
                return (
                    <div id="MinePage">
                        <HeaderModule>我的信息</HeaderModule>
                        <MineModule></MineModule>
                        <FooterModule active="4">底部</FooterModule>
                    </div>
                )
                break;
            case "ProListModule":
                return (
                    <div id="ProListPage">
                        <HeaderModule back={false} btn="go-cart">商品列表</HeaderModule>
                        <SortModule ></SortModule>
                        <ScrollModule></ScrollModule>
                        <FooterModule active="2">底部</FooterModule>
                    </div>
                )
                break;
            case "ProDetailModule":
                return (
                    <div id="detailPage">
                        <HeaderModule back={true} btn="go-cart">商品详情</HeaderModule>
                        <DetailModule goodsId={this.detailGoodsID} ></DetailModule>
                    </div>
                )
                break;
            case "CartModule":
                return (
                    <div id="cartPage">
                        <HeaderModule back={false} btn="go-cart">购物车</HeaderModule>
                        <CartModule ></CartModule>
                        <FooterModule active="3">底部</FooterModule>
                    </div>
                )
                break;
        }

    }
});

ReactDOM.render(<div id="app"><AppShow page="ProListModule"></AppShow></div>,
    document.body);

