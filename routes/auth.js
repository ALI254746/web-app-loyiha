import { Router } from "express";
import User from "../models/user.js";



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
 router.post('/login',(req,res)=>{
   
   res.redirect('/')
 })
 router.post('/register',async (req,res)=>{
   
   const userData={
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password,
   }
  const user = await User.create(userData)
  console.log(user)
   res.redirect('/')
 })
export default router