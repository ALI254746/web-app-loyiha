import express from "express";
import {create} from "express-handlebars";
import AuthRoutes from './routes/auth.js';
import ProductRoutes from './routes/product.js';



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
 
  app.use(AuthRoutes)
  app.use(ProductRoutes)
 
  


const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`server ${PORT} portda ishlamoqda`));
