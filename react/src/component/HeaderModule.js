/**
 * Created by hasee on 2016/6/15.
 */
var React = require('react');
var HeaderModule = React.createClass({
    goCart:function(){
        window.location.hash = "CartModule"
    },
    render:function(){
        /* this.props.btn==="search||go-cart";
         this.props.back===true;*/
        return (
            <header>
                <p className="empty">
                    <a style={{display:this.props.back?"block":"none"}}
                       className="go-back iconfont" href="javascript:window.history.go(-1);">&#xe619;</a>
                </p>

                <p className="header-tit">{this.props.children}</p>
                <p className="empty">
                    <a  style={{display:this.props.btn=="search"?"block":"none"}}
                        className="search  iconfont" href="javascript:;">&#xe615;</a>
                    <a onClick={this.goCart}  href="#CartModule" style={{display:this.props.btn=="go-cart"?"block":"none"}}
                        className="go-cart  iconfont" href="javascript:;">&#xe61b;</a>
                </p>
            </header>
        )
    }
});


module.exports = HeaderModule;

