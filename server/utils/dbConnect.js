import mongoose from "mongoose";
require('dotenv').config()
const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONG0_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;



// const dbConnect =  async ()=>{

//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URI,{
//             //must add in order to not get any error masseges:
//             useUnifiedTopology:true,
//             useNewUrlParser: true,
//             useCreateIndex: true
//         })
//         console.log(`mongo database is connected!!! ${conn.connection.host} `)
//     }catch(error){
//         console.error(`Error: ${error} `)
//         process.exit(1) //passing 1 - will exit the proccess with error
//     }

// }

// export default dbConnect