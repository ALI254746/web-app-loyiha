import { Router } from "express";

const router=Router();


router.get('/', (req, res) => {

    res.render('index',{
      title:'Boom shoop |ali'
    })
 });
 
 
 
 router.get("/product",(req,res)=>{
    res.render('product',{
      title:'product |ali',
      isProduct:true,
    })
 });
 
 router.get("/add",(req,res)=>{
    res.render('add',{
      title:'add |ali',
      isAdd:true,
    })
 })
 export default router;