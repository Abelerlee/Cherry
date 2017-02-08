/**
 * Created by hasee on 2016/6/17.
 */
var React = require('react');
var fnBase = require('../lib/fnBase');
var ReactBridge = require('../lib/ReactBridge');
var IScroll= require("swiper")
var $= require("jquery")
var DetailModule = React.createClass({
    getInitialState:function(){
        /*/设置默认状态*/
        return{
            imgsUrl:[],/*轮播图*/
            price:"",
            buynumber:"",
            goodsName:"",
            discount:""

        }
    },
    componentWillMount:function(){
        $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
            {goodsID:this.props.goodsId},function(data){
                console.log(data[0])
                this.setState({
                    imgsUrl:JSON.parse(data[0].imgsUrl),
                    price:data[0].price,
                    buynumber:data[0].buynumber,
                    goodsName:data[0].goodsName,
                    discount:data[0].discount
                })
            }.bind(this))
    },
    addBtnClick:function(){
        console.log(this)
        $.get("http://datainfo.duapp.com/shopdata/updatecar.php",
            {userID:fnBase.getUserId(),goodsID:this.props.goodsId,number:1},function(data){
                if(data){
                    alert("添加成功")
                }
            })
    },
    render: function () {
        console.log("render")
        return(
            <div className="detail-cont"  >
                <div ref="swiperContainer" className="swiper-container"  style={{width:"180vw",marginLeft:"-40vw",position:"relative"}}>
                    <div  className="swiper-wrapper">
                        {
                            this.state.imgsUrl.map(function(ele,i,arr){
                                return <div key={i} className="swiper-slide"><img src={ele}/></div>
                            })
                        }

                    </div>

                </div>
                <div ref="pagination" className="swiper-self-pagination"></div>
                <div className="text-info">
                    <p>{this.state.goodsName}</p>
                    <p><em>{this.state.price}</em></p>
                    <p>{this.state.buynumber}</p>
                </div>
                <div className="look-detail">查看商品详情</div>
                <div className="add-cart">
                    <button onClick={this.addBtnClick}>添加到购物车</button>
                </div>
            </div>
        )
    },
    componentDidMount:function(){

    },
    componentDidUpdate:function(){


        var swiper = new Swiper(this.refs.swiperContainer, {
            pagination:  this.refs.pagination,
            slidesPerView: '3',
            loop:true
        });
    }
});
module.exports = DetailModule;