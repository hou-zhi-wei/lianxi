import React, { Component } from 'react'
import "./css/index.css"
import {connect} from "react-redux"
export default class Xiangqing extends Component {
    state={
        list:this.props.location.state
    }
    render() {
        const {list}=this.state
        console.log(list)
        return (
            <div className="page">
                    <div className="page1">
                    <img src={list.dataimg} alt="" />
                        <p>{list.datatitle}</p>
                        <p>{list.datatime}</p>
                        <button className="btn" onClick={()=>this.props.Gouwu(list)}>加入购物车</button>
                    </div>
            </div>
        )
    }
}
let mapStateToProps=(store)=>{
    console.log(store)
    return {
        
    }
}

let mapDisPatchToProps=(dispatch)=>{
    return {
            Gouwu(list){
                dispatch({type:"LIST_GOUWU",AA:list})
            }
    }
}
Xiangqing=connect(mapStateToProps,mapDisPatchToProps)(Xiangqing)