import { createSession, ask, queryContent} from './session.js'
async function  main(){
  const { conversation_id } = await createSession()
  console.log(conversation_id,0)
  try{
    const result = await queryContent("广东茂名电白博贺镇上杨梅村怎么样？", conversation_id)
    console.log(result,1)
  } catch( err) {
    console.log(err)
  }
  
}

await main()
