/**
 * Created by hasee on 2016/6/14.
 */

var fnBase = require('./lib/fnBase');
var ReactBridge = require('./lib/ReactBridge');
var FooterModule = require('./component/FooterModule');
var HeaderModule = require('./component/HeaderModule');
var LoginModule = require('./component/LoginModule');


ReactDOM.render(<div>
    <HeaderModule>开心摇摇用户登录</HeaderModule>
    <LoginModule></LoginModule>
    <FooterModule active="5"></FooterModule>
</div>,document.getElementById('app'));

