import request from 'request'
const host = "https://qianfan.baidubce.com";
const app_id = "675a9902-b12a-4d18-a492-6e4e3b44449c";
const secret_key =
  "Bearer bce-v3/ALTAK-jud8gAdIhkMuclt5A73TM/c291db52821c523d7e3cc9e7e3156bc97267ef8a";
import { randomUUID } from "node:crypto";

export function createSession() {
  const body = JSON.stringify({ app_id });
  const traceId = randomUUID().replace(/\-/g, "");
  const appRequestId = randomUUID();
  const bceRequestId = randomUUID();
  const headers = {
    "Bfe-Trace-Id": traceId,
    "Content-Length": body.length,
    "Content-Type": "application/json",
    Date: new Date().toGMTString(),
    "X-Appbuilder-Request-Id": appRequestId,
    "X-Bce-Gateway-Region": "BJ",
    "X-Bce-Request-Id": bceRequestId,
    "X-Appbuilder-Authorization": secret_key,
  };

  return fetch(`${host}/v2/app/conversation`, {
    method: "post",
    headers,
    body: body,
  })
    .then((response) => {
      // console.log(response.headers)
      // console.log(response.status)
      // console.log(response.ok)
      if(response.status === 200 && response.ok)
        return response.json();
      else 
        return response.text();
    })
    .then((data) => {
      // console.log(data)
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

export function ask(query, conversation_id) {
  const body = JSON.stringify({
    app_id,
    query,
    stream: false,
    conversation_id,
  });
  const traceId = randomUUID().replace(/\-/g, "");
  const appRequestId = randomUUID();
  const bceRequestId = randomUUID();
  const headers = {
    "Bfe-Trace-Id": traceId,
    // "Content-Length": 1000,
    "Content-Type": "application/json",
    "Date": new Date().toGMTString(),
    "X-Appbuilder-Request-Id": appRequestId,
    "X-Bce-Gateway-Region": "BJ",
    "X-Bce-Request-Id": bceRequestId,
    "X-Appbuilder-Authorization": secret_key,
  };

  return fetch(`https://qianfan.baidubce.com/v2/app/conversation/runs`, {
    method: "post",
    headers,
    body,
  })
    .then((response) => {
      console.log(response.headers)
      console.log(response.status)
      console.log(response.ok)
      if(response.status === 200 && response.ok)
        return response.json();
      else 
        return response.text();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

export function queryContent(query, conversation_id) {
  
  return new Promise((resolve,reject) =>{
    const body = JSON.stringify({
      app_id,
      query,
      stream: true,
      conversation_id,
    });
    const traceId = randomUUID().replace(/\-/g, "");
    const appRequestId = randomUUID();
    const bceRequestId = randomUUID();
  
    const options = {
      'method': 'POST',
      'url': 'https://qianfan.baidubce.com/v2/app/conversation/runs',
      'headers': {
        "Bfe-Trace-Id": traceId,
        // "Content-Length": body.length,
        "Content-Type": "application/json",
        "Date": new Date().toGMTString(),
        "X-Appbuilder-Request-Id": appRequestId,
        "X-Bce-Gateway-Region": "BJ",
        "X-Bce-Request-Id": bceRequestId,
        "X-Appbuilder-Authorization": secret_key,
      },
      'body': body
    }
    request(options, function(err,response) {
  
        if(err) {
          reject(err)
        } else {
          resolve(response.body)
        }
        
    })
  })
  

}