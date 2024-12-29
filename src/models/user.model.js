import mongoose,{Schema, schema }from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema =  new schema(
    {
         username: {
            type: String,
            required: true,
            inique: true,
            lowecase: true,
            trim: true,
            index: true
         },
          email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
         },

          fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
         },
           avatar: {
            type: String,
            required: true,
         },

         coverImage:{
            type: String
         },

         watchHistory:[
            {
                type: Schema.type.ObjectId,
                ref: "Video"
            }
         ],
         password:{
            type: String,
            require:[true, "password is requires"]
         },

         refreshToken:{
            type: String
         }



    },
    {
        timestamp: true
    }
)
 userSchema.pre('save', async function (next) {
    if(!this.ismodified("password")){
     return next();
    }
    this.password = bcrypt.hash(this.password, 10)
    next()
 })
 
 userSchema.methods.isPasswordCorrect = async function (password){
      return await bcrypt.compare(password, this.password)
 }
export const User = mongoose.model("User", userSchema)