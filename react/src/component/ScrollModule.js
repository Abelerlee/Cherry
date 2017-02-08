/**
 * Created by hasee on 2016/6/17.
 */
var React = require('react');
var fnBase = require('../lib/fnBase');
var ReactBridge = require('../lib/ReactBridge');
var ListModule = require('./ListModule');
var IScroll= require("iscroll")
var $ = require("jquery");

var ScrollModule = React.createClass({
    getInitialState:function(){
        return{
            pageNum:1, /*加载几页数据*/
            listData:[], /*用来保存数据*/
            sortId:1 /*商品的类别*/
        }
    },

    componentWillMount:function(){
        /*当组件即将添加在页面里面*/
        this.getData(this.state.pageNum);

        ReactBridge.regList("selectSort",function(i){
            console.log(i)
            this.getData(1,i);

        }.bind(this))
    },
    getData:function(num,sortId){
        /*num 是显示几页数据 ， sortId是显示那一栏商品的数据（classID）
         * 如果没有传sortId，说明你不需要修改sortId ,就使用原本的sortId
         * classID:sortId||this.state.sortId
         * sortId 不能输数字0，因为数字0是false
         * * */
        console.log(sortId)
        $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
            {"pageCode":0,"linenumber":5*num,classID:sortId||this.state.sortId},
            function(data){
                console.log("ajax完成");

                if(num==1){
                    this.myScroll.scrollTo(0, 0, 700,IScroll.utils.ease.bounce )
                }
                console.log(this)
                this.setState({
                    listData:data,
                    pageNum:num+1,
                    sortId:sortId||this.state.sortId
                });

            }.bind(this));
    },
    render:function(){
        console.log("render");
        return(
            <div className="content proList-cont">
                <div id="touch-load">
                    <img src="images/arrow.png"/>
                </div>
                <div className="scroll-wrap"  id="scroll-wrap">
                    <div id="scroller">
                        <ListModule>{this.state.listData}</ListModule>
                    </div>
                </div>
            </div>
        )
    },
    componentDidMount:function(){
        console.log("组件第一次渲染，IScroll初始化");
        this.myScroll = new IScroll("#scroll-wrap",{
            scrollbars: true,
            shrinkScrollbars: 'scale',//是否弹性
            fadeScrollbars: true, /*自动隐藏*/
            click:true
        });

        /*加载更多*/
        this.myScroll.on("scrollEnd",function(){
            if((this.myScroll.y==this.myScroll.maxScrollY) && (this.myScroll.y!=0)){
                /*到最低部*/
                //加数据
                console.log("加载更多");
                this.getData(this.state.pageNum)
            }
        }.bind(this));

        /*下拉刷新*/
        var canLoad = false;
        $("#scroll-wrap").on("touchmove",function(){
            if(this.myScroll.y>=70){
                $("#touch-load").addClass("rotate")
                canLoad = true;
            }
        }.bind(this));


        $("#scroll-wrap").on("touchend",function(){

            if(canLoad){
                $("#touch-load").removeClass("rotate")
                console.log("刷新页面");
                canLoad =false;

                this.getData(1)
            }

        }.bind(this))

    },
    componentDidUpdate:function(){
        console.log("组件再次渲染，这时候重新计算IScroll的高度");

        this.myScroll.refresh()

    }
});
module.exports=ScrollModule