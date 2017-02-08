/**
 * Created by hasee on 2016/6/17.
 */
var fnBase = require('../lib/fnBase');
var React = require('react');
var $= require("jquery")
var MineModule = React.createClass({
    render:function(){
        return (
            <div className="content">{this.props.children}</div>
        )
    }
});
module.exports = MineModule;