/**
 * Created by hasee on 2016/6/17.
 */
var React = require('react');
var CalculateModule = React.createClass({
    getInitialState:function(){
        return {
            num:parseInt(this.props.children)
        }
    },
    minusClick:function(){
        var num = this.state.num-1<1?1:this.state.num-1;
        if(num == this.state.num) return;
        /*修改父组件的状态 参数:要修改第一个li，要修改的数量*/
        this.props.changeState(this.props.index,num)
        this.setState({num:num})

    },
    plusClick:function(){

        var num = this.state.num+1;

        if(num == this.state.num) return;
        this.props.changeState(this.props.index,num)
        this.setState({
            num:this.state.num+1
        })

    },
    changeNum:function(ev){
        var num = ev.target.value.replace(/\D/g,"").substring(0,2)
        if(num == this.state.num) return;
        this.props.changeState(this.props.index,num)
        this.setState({num:num})
    },
    render:function(){

        return (
            <div className="calc-num" >
                <span>数量：</span>
                <p className="button" ref="min"  onClick={this.minusClick}>-</p>
                <input ref="text" type="text" onChange={this.changeNum} value={this.state.num}  />
                <p className="button" ref="plus"  onClick={this.plusClick}>+</p>
            </div>
        )
    }
})

module.exports = CalculateModule