import { Router } from "express";
import product from '../models/product.js'

const router=Router();


router.get('/', (req, res) => {

    res.render('index',{
      title:'Boom shoop |ali',
      
    })
 });
 
 
 
 router.get("/products",(req,res)=>{
    res.render('product',{
      title:'product |ali',
      isProduct:true,
    })
 });
 
 router.get("/add",(req,res)=>{
    res.render('add',{
      title:'add-product||ali',
      isAdd:true,
    })
 })
 router.post('/add-products',async(req,res)=>{
  const {title,description,image,price}=req.body
  const products=await product.create(req.body)
  console.log(products)
  res.render('index')
 })
 export default router;