const mongoose = require("mongoose")
const dns = require("dns")
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

async function connectToDb(){
    try{
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected TO Database")
    }
    catch(err){
        console.log("error is: ",err)
    }
}

module.exports = connectToDb