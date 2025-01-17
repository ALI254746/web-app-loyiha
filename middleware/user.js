import  Jwt  from "jsonwebtoken"
import User from "../models/user.js"


export default async function (req,res,next){
    if(!req.cookies.token){
        // res.redirect('/login')
        res.locals.userId=req.user ? req.userId :null;
        console.log('user Id:',res.locals.userId)
        next()
        return
    }
    //jwt tokenni olib volamiz
    const token=req.cookies.token
    //va shiferini ochamiz 
    const decode=Jwt.verify(token,process.env.jwt_secret)
    const user=await User.findById(decode.userId)
   req.userId=user._id
    next()
}