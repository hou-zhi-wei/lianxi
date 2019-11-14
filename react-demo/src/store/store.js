import {createStore} from "redux"

let reducers=(state,action)=>{
    console.log(action)
    if(action.type==="LIST_GOUWU"){
        state.GG.push(action.AA)
    }
    if(action.type==="JJ"){
        ++action.ADDlist.dataprice
        return {...state,GG:[action.ADDlist]}
    }
    if(action.type==="JIan"){
      if(action.Remove.dataprice<=0){
        alert("别点了")
      }else{
        --action.Remove.dataprice
        return {...state,GG:[action.Remove]}
      }
    }
    return {...state}
}

let initState={
    GG:[]
}



let store=createStore(reducers,initState)

export default store