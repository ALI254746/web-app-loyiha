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
export default router