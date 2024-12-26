import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./contents.js";

import connectdb from "./db/inddexdb.js";


dotenv.config({
    path:'.env'
})


connectdb()
.then(()=>{
    app.listin(process.env.PORT || 8000, ()=>{
        console.log(`@ server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) =>{
    console.log("mongo db connection faild !!", err);
    
})



// ;(
//     async () => {
//      try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
//      } catch (error) {
//         console.log("db error: ", error);
        
//      }   
//     }
// )