/**
 * Created by hasee on 2016/6/17.
 */
var React = require('react');
var fnBase = require('../lib/fnBase');
var CalculateModule= require("./CalculateModule")


var ListModule = React.createClass({
    deleteClick:function(i,ev){
        // 删除
        this.props.deleteChange(i,ev.target)
    },
    render:function(){

        return(
            <ul >
                {
                    this.props.children.map(function(ele,i,arr){
                        return (
                            <li className="item">
                                <img src={ele.goodsListImg}/>
                                <div className="item-cont">
                                    <p className="item-name ovfl-ellipsis2">
                                        {ele.goodsName}
                                    </p>
                                    <p className="item-price">{ele.price}</p>
                                    <CalculateModule index={i} changeState={this.changeNum}>{ele.number}</CalculateModule>
                                </div>

                                <div onClick={this.deleteClick.bind(this,i)} className="item-delete iconfont">&#xe68d;</div>
                            </li>
                        )
                    }.bind(this))
                }
            </ul>
        )
    }

});

module.exports=ListModule;

