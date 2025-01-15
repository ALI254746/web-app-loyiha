import { Router } from "express";
import User from "../models/user.js";
import bcrytp from "bcrypt";


const router=Router();
router.get("/login",(req,res)=>{
    res.render("login",{
      title:'login |ali',
      isLogin:true,
      LoginError:req.flash('LoginError'),
    });
 })
 router.get("/register",(req,res)=>{
    res.render("register",{
      title:'register | ali',
      isRegister:true,
      RegisterError:req.flash("RegisterError"),
    })
 })
 router.post('/login', async(req,res)=>{
  const {email ,password}=req.body
  if(!email || !password){
    req.flash('LoginError' ,"all file is require")
    res.redirect('login')
    return
  }
   const existUser=await User.findOne({email})
   if(!existUser) {
    req.flash('LoginError' ,"user not faund")
    res.redirect('login')
    return 
       }
           

    const isPassEqual=await bcrytp.compare(password,existUser.password);
    if(!isPassEqual){
      req.flash('LoginError' ,"wrong password")
      res.redirect('login')
      return 
    }
   res.redirect('/')
 })
 router.post('/register',async (req,res)=>{
  const {firstname,lastname,email,password}=req.body
  if(!firstname || !lastname || !email ||!password){
    req.flash('RegisterError',"all file write require")
    res.redirect('register')
    return
  }
  const candidate =await User.findOne({email})
  if(candidate){
    req.flash('RegisterError',"allaqachon ro'yxatdan o'tgan")
    res.redirect('register')
    return
  }
   
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