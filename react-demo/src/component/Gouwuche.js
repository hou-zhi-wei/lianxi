import React, { Component } from 'react'
import {connect} from "react-redux"
export default class Gouwuche extends Component {
    render() {
        const {GG}=this.props
        console.log(GG)
        return (
            <div>
                {
                    GG.map((item,key)=>{
                        return <div key={key}>
                            <img src={item.dataimg} alt="" />
                            <p>{item.datatitle}</p>
                            <p>{item.datatime}</p>
                            <span onClick={()=>this.props.Add(item)}>+</span>
                            <span>{item.dataprice}</span>
                            <span onClick={()=>this.props.remove(item)}>-</span>
                        </div>
                    })
                }
            </div>
        )
    }
}
let mapStateToProps=(store)=>{
    const {GG}=store
    console.log(GG)
    return {
        GG
    }
}

let mapDisPatchToProps=(dispatch)=>{
    return {
        Add(item){
            dispatch({type:"JJ",ADDlist:item})
        },
        remove(item){
            dispatch({type:"JIan",Remove:item})
        }
    }
}

Gouwuche=connect(mapStateToProps,mapDisPatchToProps)(Gouwuche)
