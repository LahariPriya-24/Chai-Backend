import mongoose,{ Schema} from "mongoose";
import bcrypt from "bcrypt"




const userSchema=new Schema({
    username:{
        type: String,
        required:true,
        unique: true,
        lowecase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type: String,
    },
    watchHistory:[
        {
            type: Schema.types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required: [true,'Password is required']
    }
})

userSchema.pre("save",async function (next){
    if (!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10)
    next()

})
userSchema.methods.isPassowrdCorrect=async function
(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    JsonWebTokenError.sign(
        {
            _id:this.is,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshTOken=function(){
      JsonWebTokenError.sign(
        {
            _id:this.is,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}



export const User=mongoose.model("User",user)