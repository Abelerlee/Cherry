/**
 * Created by hasee on 2016/6/17.
 */
var React = require('react');
var fnBase = require('../lib/fnBase');
var CalculateModule= require("./CalculateModule")
var IScroll= require("iscroll")
var $= require("jquery")

var CartModule = React.createClass({
    getInitialState:function(){
        /*/设置默认状态*/
        return{
            num:"", /*商品总数*/
            sum:"", /*商品的金额总和*/
            cartData:[], /*购物车的数据列表*/
            empty:2, /*是否为空，0：空，1：非空，2：我不确定他空不空*/
            key:1 /*????????????*/
        }
    },
    deleteClick:function(i,ev){
       // 删除
        //this.state.cartData
        var item = $(ev.target).parents(".item");
        var arr = this.state.cartData;
        $.get("http://datainfo.duapp.com/shopdata/updatecar.php",
            {userID:fnBase.getUserId(),goodsID: arr[i].goodsID,number:0},function(data){
                if(data==1){
                    /*删除成功*/
                    fnBase.itemRemove(item,function(){/*通过动画删除*/
                        arr.splice(i,1);
                        this.calcState(arr)/*重新计算状态*/
                    }.bind(this))

                }else {
                    alert("删除失败")
                }
            }.bind(this))
    },
    calcState:function(data){
        var num=0;
        var sum=0;
        for(var i=0;i<data.length;i++){
            num+=parseInt(data[i].number)/*计算数量*/

            /*计算么一个商品的总金额*/
            var price = fnBase.accMul(data[i].number,data[i].price)
            /*让所有商品的金额累加*/
            sum=fnBase.accAdd(sum,price);
        }
        /*accMul
         * accAdd*/
        this.setState({
            key:this.state.key+1,
            num:num,
            sum:sum,
            cartData:data
        })
    },
    changeNum:function(index,num)
    {/*给子组件，用来控制父组件的方法*/
        console.log(index)
        console.log(num)
        var arr = this.state.cartData;
        arr[index].number = num;
        this.calcState(arr)/*重新计算状态*/

        /*把你点击的那个li的 数量修改成 子组件传进来的数量*/
    },
    componentWillMount:function(){
        $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",
            {userID:fnBase.getUserId()},function(data){
                console.log(data)
                if(data.length){
                    /*证明现在有数据*/
                    this.calcState(data)/*计算状态的方 (数量和金额)*/
                }else {
                    /*空的*/
                }

            }.bind(this))
    },
    render: function () {
        console.log("render")
        return(
            <div>
                <div className="cart-tit">
                    <span>{"数量"+this.state.num}</span>
                    <em>{"总金额"+this.state.sum}</em>
                </div>
                <div className="content cart-cont">
                    <div  ref="scrollWrap" id="cart-scroll" className="scroll-wrap">
                        <div className="scroller" key={"list"+this.state.key}>
                            <ul >
                                {
                                    this.state.cartData.map(function(ele,i,arr){
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

                        </div>

                    </div>

                </div>

            </div>
        )

    },
    componentDidMount:function(){
        this.myScroll = new IScroll("#cart-scroll",{
            scrollbars: true,
            bounce:true,
            fadeScrollbars: true, /*自动隐藏*/
            click:true
        });
    },
    componentDidUpdate:function(){
        console.log(this.myScroll)
        this.myScroll.refresh()
    }
});

module.exports = CartModule;