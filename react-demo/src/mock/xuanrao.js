import Mock,{Random} from "mockjs"

let data=Mock.mock({
    "List|10":[{
        "datatitle":"@ctitle(8)",
        "dataimg":Random.dataImage("200x100"),
        "datatime":('@now'),
        "dataprice|1-100":100
    }]
})

export default data