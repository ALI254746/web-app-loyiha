import { Router } from "express";
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
   console.log(req.body)
   res.redirect('/')
 })
 router.post('/register',(req,res)=>{
   console.log(req.body)
   res.redirect('/')
 })
export default router