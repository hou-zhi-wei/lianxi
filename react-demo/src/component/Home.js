import React, { Component } from 'react'
import "./css/index.css"
import Requset from "../until/Requset"
export default class Home extends Component {
    state={
        listData:[]
    }
 
    componentDidMount(){
        Requset("/list.json").then((res)=>{
            this.setState({
                listData:res.List
            })
        })
    }
    xiangqing=(item)=>{ 
      this.props.history.push("/Xiangqing",item)  
    }
   
    render() {
        const {listData}=this.state
        console.log(listData)
        return (
            <div>
                 <div className="header">
                    <h2>北京中志晟世文化传媒有限公司</h2>
                 </div>
                <div>
                    {
                       listData.map((item,index)=>{
                           return <div key={index}  onClick={()=>this.xiangqing(item)} className="xuanrao">
                                
                                  <ul>
                                      <li>{item.datatitle}</li>
                                      <li>{item.datatime}</li>
                                      <li>{item.dataprice}</li>
                                  </ul>
                                    <img src={item.dataimg} alt=""/>
                                
                           </div>
                       })
                    }
                </div>
            </div>
        )
    }
}
