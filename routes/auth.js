import { Router } from "express";
import User from "../models/user.js";
import bcrytp from "bcrypt";


const router=Router();
router.get("/login",(req,res)=>{
    res.render("login",{
      title:'login |ali',
      isLogin:true,
    });
 })
 router.get("/register",(req,res)=>{
    res.render("register",{
      title:'register | ali',
      isRegister:true,
    })
 })
 router.post('/login', async(req,res)=>{
   const existUser=await User.findOne({email:req.body.email})
   if(!existUser) {
    console.log("user topilmadi")
    return false
       }
           

    const isPassEqual=await bcrytp.compare(req.body.password,existUser.password);
    if(!isPassEqual){
     console.log("password xato")
    return false;
    }
   res.redirect('/')
 })
 router.post('/register',async (req,res)=>{
   
  const hashedPassword= await bcrytp.hash(req.body.password,10)
   const userData={
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:hashedPassword,
   }
  const user = await User.create(userData)
  console.log(user)
   res.redirect('/')
 })
export default router