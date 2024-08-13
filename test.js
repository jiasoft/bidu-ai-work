


import axios from "axios"

// axios({
//   url: 'https://qianfan.baidubce.com',
//   method:'post',
//   data:{
//   app_id: "675a9902-b12a-4d18-a492-6e4e3b44449c",
//   headers:{
//   'Authorization':'bce-v3/ALTAK-EtnR9f2LzSi1ej3LPw1Qa/06a44098418a6419fac69a8b96fb6257abb215a2',
//   'Content-Type':'application/json;charset=utf-8'
//   }
// }}).then(res => {
//   console.log("============================")
//   console.log(res);
// })

const body = JSON.stringify({app_id: "675a9902-b12a-4d18-a492-6e4e3b44449c"})
fetch("https://qianfan.baidubce.com/v2/app/conversation", {
  method:"post",
  headers:{
    
      "Bfe-Trace-Id": "49191ab7d8eaee4d1a5cf956557aa5e0",
      "Content-Length": body.length,
      "Content-Type": "application/json",
      "Date": "Sun, 28 Jul 2024 15:45:13 GMT",
      "X-Appbuilder-Request-Id": "22452103-a415-446c-bc14-9ecadbc9f740",
      "X-Bce-Gateway-Region": "BJ",
      "X-Bce-Request-Id": "780c3fba-f21a-4028-85a4-231cc40540b8",
      "X-Appbuilder-Authorization": "Bearer bce-v3/ALTAK-EtnR9f2LzSi1ej3LPw1Qa/06a44098418a6419fac69a8b96fb6257abb215a2",
      // 'Authorization':'bce-v3/ALTAK-EtnR9f2LzSi1ej3LPw1Qa/06a44098418a6419fac69a8b96fb6257abb215a2'
  
  },
  body: body
}).then(response => {
    console.log(response.headers)
    console.log(response.status)
    console.log(response.ok)
    return response.text()
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
console.log("----------------------------------------")