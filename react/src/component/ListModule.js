/**
 * Created by hasee on 2016/6/17.
 */

var React = require('react');
var $= require("jquery")
var ReactBridge = require('../lib/ReactBridge');
var ListModule = React.createClass({
    goodsClick:function (id){
        ReactBridge.use("setGoodsID",id);
        window.location.hash="ProDetailModule"
    },
    render:function(){

        return(
            <ul>
                {
                    this.props.children.map(function(ele,i,arr){
                        return (
                            <li onClick={this.goodsClick.bind(this,ele.goodsID)}>
                                <img src={ele.goodsListImg}/>
                                <p><strong>{ele.goodsName}</strong></p>
                                <p><em>{"金额：￥"+ele.price}</em><span>{"折扣："+ele.discount}</span></p>
                            </li>
                        )
                    }.bind(this))
                }
            </ul>
        )
    }

});

module.exports=ListModule

