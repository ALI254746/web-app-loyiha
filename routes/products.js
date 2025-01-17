import { Router } from "express";
import Product from '../models/product.js'
import authmiddileware from '../middleware/auth.js'
import usermiddelware from "../middleware/user.js";
import { populate } from "dotenv";

const router=Router();


router.get('/',async (req, res) => {
const products = await Product.find().lean()

    res.render('index',{
      title:'Boom shoop |ali',
      products:products.reverse(),//yangi qo'shilganlar yuqorida turadi
      userId:req.userId ? req.userId.toString() : null,
    })
 });
 
 
 
 router.get("/product", async (req,res)=>{
  const user=req.userId ? req.userId.toString() : null
  const myProducts =await Product.find({user}).populate('user').lean()
  
    res.render('product',{
      title:'product |ali',
      isProduct:true,
      myProducts:myProducts,
    })
 });
 
 router.get("/add",authmiddileware,(req,res)=>{
  //authmiddelware ishlatsak biz bu codni midileware filega yozamiz
  // if(!req.cookies.token){
  //   res.redirect('/login')
  //   return
  // }
    res.render('add',{
      title:'add-product||ali',
      isAdd:true,
      erroraddProduct:req.flash('erroraddProduct')
    })
 })
 router.post('/add-products',usermiddelware, async(req,res)=>{
  const {title,description,image,price}=req.body
  if(!title || !description ||!image||!price){
    req.flash('erroraddProduct','all fileds is required')
    res.redirect('/add')
    return
  }
  
  const products=await Product.create({...req.body,user:req.userId})
  
  res.render('index')
 })
 export default router;