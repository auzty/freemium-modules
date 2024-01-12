const Queue = require('bull');

let  redisconf = {}

exports.setRedisConfig = function(host,port,password){
    const newhost = host || "127.0.0.1"
    const newport = port || 6379
    const newpassword = password || ""

    redisconf = {
        redis: {
            host: newhost,
            port: newport,
            password: newpassword
        }
    }
}

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

exports.sendQueue = async function(inputku,queuename){
    try{
        qname = queuename || "default"
        const myFirstQueue = new Queue(qname,redisconf);
        const mydata = inputku || "default"
        await myFirstQueue.add(mydata)
        console.log("this is inputku : ",mydata)
    }catch(e){
        throw new Error(e.message)
    }
}
