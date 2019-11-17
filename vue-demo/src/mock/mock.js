import Mock,{Random} from "mockjs"

let data=Mock.mock({
    "data|10":[{
        "datatitle":"@csentence",
        "dataimg":Random.dataImage('200x100'),
        "dataname":"@county(5)"

    }]
})


Mock.mock(/\/api\/list/,"get",()=>{
    return data
})