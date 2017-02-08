/**
 * Created by hasee on 2016/6/17.
 */
var React = require('react');
var fnBase = require('../lib/fnBase');
var $= require("jquery")
var LoginModule = React.createClass({
    getInitialState:function(){
        return{
            password:"", /*密码*/
            username:"", /*用户*/
            showPW:false, /*是否显示密码*/
            radioState:false,
            remember:localStorage.getItem("rememberPW")=="true"?true:false/*是否记住密码自动登录*/
        }
    },
    loginClick:function(){
        /*当登录按钮被点击的时候*/
        console.log(this.state.username)
        console.log(this.state.password)
        /*status:login	登陆成功：返回json对象{code:'',userID:'',password:'', userimg_url:'', sex:''}
         userID用户名	用户名不存在：0
         password:密码*/
        $.get("http://datainfo.duapp.com/shopdata/userinfo.php",
            {status:"login","userID":this.state.username,"password":this.state.password},function(data){

                if(data==0){
                    alert("用户名不存在")
                }else if(data==2){
                    alert("用户名和密码不符")
                }else{
                    //var obj = JSON.parse(data);
                    window.location.hash="ProListModule"

                }
            }.bind(this))

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
    showPWChange:function(){
        /*当显示密码的按钮被点击的 时候，让显示密码的状态取反*/
        this.setState({
            showPW:!this.state.showPW
        })
    },

    rememberChange:function(){
        /*等记住密码的状态发生改变的时候*/
        localStorage.setItem("rememberPW",!this.state.remember);
        this.setState({
            remember:!this.state.remember
        });
        //localStorage.setItem("rememberPW",this.state.remember);

    },
    render:function(){
        /*看看显示密码的状态*/
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

                    <div className={this.state.showPW?"radio-wrap selected":"radio-wrap"} onClick={this.showPWChange}>
                        <span  className="radio"></span>
                        <span className="radio-text">显示密码</span>
                    </div>

                    <a className="forget">忘记密码</a>
                </div>

                <div className="select-item">
                    <div  className={this.state.remember?"selected radio-wrap":"radio-wrap"}
                          onClick={this.rememberChange}>
                        <span  className="radio"></span>
                        <span className="radio-text">记住密码自动登录</span>
                    </div>
                </div>
                <div>
                    <button onClick={this.loginClick}>登录</button>
                </div>

                <div>
                    <button>注册</button>
                </div>
            </div>
        )
    }

});
module.exports=LoginModule