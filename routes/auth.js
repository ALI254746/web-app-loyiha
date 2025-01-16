import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import {generateJWTToken} from '../services/token.js'

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
 router.get('/logout',(req,res)=>{
  res.clearCookie('token')
  res.redirect('/')
  return
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
           

    const isPassEqual=await bcrypt.compare(password,existUser.password);
    if(!isPassEqual){
      req.flash('LoginError' ,"wrong password")
      res.redirect('login')
      return 
    }
    
    const token = generateJWTToken(existUser._id)
    //localstorage ga saqlaydi
    res.cookie('token',token,{httpOnly:true,secure:true})
   res.redirect('/')
 })
 // auth.js





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
   
  const hashedPassword= await bcrypt.hash(req.body.password,10)
   const userData={
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:hashedPassword,
   }
  const user = await User.create(userData)
  const token = generateJWTToken(user._id)
  //localstorage ga saqlaydi
  res.cookie('token',token,{httpOnly:true,secure:true})
   res.redirect('/')
 })
export default router