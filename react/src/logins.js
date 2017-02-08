/**
 * Created by hasee on 2016/6/14.
 */

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
                        <p className="iconfont">&#xe664;</p>
                        <p>分类</p>
                    </li>
                    <li className={this.state.active==3?"active":""}>
                        <p className="iconfont">&#xe61b;</p>
                        <p>购物车</p>
                    </li>
                    <li className={this.state.active==4?"active":""}>
                        <p className="iconfont">&#xe646;</p>
                        <p>我的秀</p>
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
var HeaderModule = React.createClass({
    render:function(){
        return (
            <header>{this.props.children}</header>
        )
    }
});

var LoginModule = React.createClass({
    getInitialState:function(){
        return{
            password:"", /*密码*/
            username:"", /*用户*/
            showPW:false, /*是否显示密码*/
            remember:localStorage.getItem("rememberPW")=="true"?true:false/*是否记住密码自动登录*/
        }
    },
    loginClick:function(){
        /*当登录按钮被点击的时候*/
        console.log(this.state.username)
        console.log(this.state.password)

        $.get("http://datainfo.duapp.com/shopdata/userinfo.php",
            {status:"login",userID:this.state.username,password:this.state.password},function(data){
                if(data==0){
                    alert("用户名不存在")
                }else if (data==2){
                    alert("用户名密码不符")
                }else{
                    alert("登陆成功");
                    fnBase.setUserId(this.state.username);

                }
            }.bind(this))
        window.location.hash ="MineModule"
    },
    passwordChange:function(ev){
        /*当密码发发改变的时候*/
        this.setState({
            password:ev.target.value.replace(/[\u4e00-\u9fa5]/g,'')
        })
    },
    usernameChange:function(ev){
        /*当用户名发生改变的时候*/
        this.setState({
            username:ev.target.value
        })
    },
    showPWChange:function(ev){
        /*当密码发生改变的时候*/
        this.setState({
            showPW:ev.target.checked
        })

    },
    rememberChange:function(ev){
        /*等记住密码的状态发生改变的时候*/
        this.setState({
            remember:ev.target.checked
        });
        localStorage.setItem("rememberPW",ev.target.checked)
    },
    render:function(){
        console.log(this.state.showPW);
        return(
            <div className="content login-cont">
                <input type="text"
                       value={this.state.username}
                       onChange={this.usernameChange} className="textInput" />
                <input type={this.state.showPW?"text":"password"}
                       value={this.state.password}
                       onChange={this.passwordChange} className="textInput" />

                <div className="select-item">
                    <label>
                        <input type="checkbox" onChange={this.showPWChange} /> <span>显示密码</span>
                    </label>
                    <a className="forget">忘记密码</a>
                </div>

                <div className="select-item">
                    <label>
                        <input type="checkbox" defaultChecked={this.state.remember} onChange={this.rememberChange} /> <span>记住密码自动登录</span>
                    </label>
                </div>

                <div>
                    <button onClick={this.loginClick}>登录</button>
                </div>

                <div>
                    <button>注册</button>
                </div>
            </div>
        )
    },
    componentDidUnmount:function(){
        console.log(111111)
    }

});


var MineModule = React.createClass({
    render:function(){
        return (
            <div className="content">{this.props.children}</div>
        )
    }
});

var AppShow= React.createClass({
    getDefaultProps:function(){
        return {
            page:"LoginModule"
        }
    },
    getInitialState:function(){
        window.location.hash.replace("#","")||(window.location.hash = this.props.page);
        return{
            page:window.location.hash.replace("#",""),
            pId:""
        }
    },
    componentWillMount:function(){
        window.onhashchange=function(){
            this.setState({
                page:window.location.hash.replace("#","")
            })

        }.bind(this);
    },
    render:function(){
        switch(this.state.page){
            case "LoginModule":
                return (
                    <div>
                        <HeaderModule>开心摇摇用户登录</HeaderModule>
                        <LoginModule></LoginModule>
                        <FooterModule active="5"></FooterModule>
                    </div>
                );
                break;
            case "MineModule":
                return (
                    <div>
                        <HeaderModule>我的信息</HeaderModule>
                        <MineModule></MineModule>
                        <FooterModule active="4"></FooterModule>
                    </div>
                )
                break;
        }

    }
});

ReactDOM.render(<AppShow page="LoginModule"></AppShow>,document.getElementById('app'));

