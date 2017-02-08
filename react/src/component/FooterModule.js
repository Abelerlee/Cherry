/**
 * Created by hasee on 2016/6/15.
 */
var React = require('react');

var FooterModule = React.createClass({
    getInitialState:function(){
        return{
            active:this.props.active
        }
    },
    render:function(){
        return (
            <footer>
                <ul>
                    <li className={this.state.active==1?"active":""}>
                        <p className="iconfont">&#xe644;</p>
                        <p>首页</p>
                    </li>
                    <li className={this.state.active==2?"active":""}>
                        <a href="#ProListModule">
                            <p className="iconfont">&#xe664;</p>
                            <p>分类</p>
                        </a>
                    </li>
                    <li className={this.state.active==3?"active":""}>
                        <a href="#CartModule">
                            <p className="iconfont">&#xe61b;</p>
                            <p>购物车</p>
                        </a>
                    </li>
                    <li className={this.state.active==4?"active":""}>
                        <a href="#MineModule">
                            <p className="iconfont">&#xe646;</p>
                            <p>我的秀</p>
                        </a>
                    </li>
                    <li className={this.state.active==5?"active":""}>
                            <p className="iconfont">&#xe660;</p>
                            <p>设置</p>

                    </li>
                </ul>
            </footer>
        )
    }
});


module.exports = FooterModule;

