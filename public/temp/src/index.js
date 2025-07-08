
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import connectDB from "./db/Index.js"

dotenv.config({
    path:'./env'

})






















// const app=express()
// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("ERRR: ",error);
//             throw error
//         })
//         application.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error("ERROR: ",error)
//         throw err
//     }
//     }
// })

