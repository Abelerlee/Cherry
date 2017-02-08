/**
 * Created by hasee on 2016/6/17.
 */
var React = require('react');
var ReactBridge = require('../lib/ReactBridge');
var $= require("jquery")
var SortModule = React.createClass({
    getInitialState:function(){
        /*/设置默认状态*/
        return{
            sortData:[],
            sortId:1
        }
    },
    componentWillMount:function(){
        $.get("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
            console.log(data)
            /*设置商品类别的数据*/
            this.setState({
                sortData:JSON.parse(data)
            })

        }.bind(this))
    },
    selectSortClick:function(i){
        this.setState({
            sortId:i
        });
        console.log(i)
        ReactBridge.useList("selectSort",i)
    },
    render: function () {
        return(
            <ul className="sort-list"  >
                {
                    this.state.sortData.map(function(ele,i,arr){
                        /*如果i+1==sorId,证明，当前的li要被选中*/
                        /*ele.classID ==i*/
                        return <li className={this.state.sortId==i+1?"active iconfont":"iconfont"}
                                   onClick={this.selectSortClick.bind(this,i+1)}
                        >&#xe664;</li>
                    }.bind(this))
                }
            </ul>
        )
    }
});

module.exports=SortModule