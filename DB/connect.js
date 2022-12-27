const mongoose = require("mongoose")

module.exports.connectionDB = async(URL)=>{
    mongoose.set('strictQuery', true) //remove the warnings
    const connection = await mongoose.connect(URL)

    const db = mongoose.connection;
    if(db.readyState == 1){
        console.log("Database Connected!")
    }
    else if(db.readyState == 2) {
        console.log("Database Establishing a connection")
    }
    else{
        console.log("Error while connecting to database")
    }
}

