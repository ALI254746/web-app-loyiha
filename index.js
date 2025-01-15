import express from "express";
import {create} from "express-handlebars";
import mongoose, { trusted } from "mongoose";
import * as dotenv from 'dotenv';
import flash from 'connect-flash';
import session from "express-session";

//ROUTES
import AuthRoutes from './routes/auth.js';
import ProductRoutes from './routes/product.js';




dotenv.config()

const app = express();


const hbs=create({
    defaultLayout:'main',
    extname:'hbs',

})
  app.engine('hbs',hbs.engine)
  app.set('view engine','hbs')
  app.set('views','./views')
// input dagi name va pasword ni o'qidi 

  app.use(express.urlencoded({extended:true}));

 //fileni static qilib inde.css file ulashimiz mumkun footerga ham shunday qilib index.js file qo'shak boladi
 app.use(express.static('public'))
 app.use(session({secret:'ali',resave:false,saveUninitialized:false}))
  app.use(flash())
 
 
 
 //midilware

 app.use(express.json())
  app.use(AuthRoutes)
  app.use(ProductRoutes)

 //bu pastdagi kod hozirgi versiyada ishlamaydi
  // mongoose.connect(process.env.MONGO_URL,{
  //   useNewUrlParser:true
  // }, () => console.log("mongo db connected"))
  // mongoose.set('strictQuery',false)
  async function connectDB() {
     try { 
      await mongoose.connect(process.env.MONGO_URL, {
       
        }); 
        console.log('MongoDB ga muvaffaqiyatli ulandi');
       } catch (error) {
         console.error('MongoDB ga ulanishda xatolik:', error); } } 
         connectDB();
// console.log(process.env.MONGO_URL)
const PORT = process.env.PORT || 4100;

app.listen(PORT, () => console.log(`server ${PORT} portda ishlamoqda`));
  
