const Queue = require('bull');

let  redisconf = {}

exports.setRedisConfig = function(redisconfig){
   redisconf={redis: redisconfig}
}

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

exports.sendQueue = async function(data,qName){
    try{
        qName = qName || "default"
        const qConn = new Queue(qName,redisconf);
        const inputData = data || "Default Input"
        await qConn.add(inputData)
    }catch(e){
        throw new Error(e.message)
    }
}
