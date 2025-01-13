import express from "express";
// import path, { dirname } from 'path';
// import { fileURLToPath } from "url";
//handlebars devishogini imort qilib olamiz
import {create} from "express-handlebars";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
//bu buyruqlar orqali handlebarsni joylab olamiz
//file nomini handlebars qilish qiyinchilik qiladi shuning uchun bu hbs ishini qilib ollamiz
const hbs=create({
    defaultLayout:'main',
    extname:'hbs',

})
  app.engine('hbs',hbs.engine)
  app.set('view engine','hbs')
  app.set('views','./views')

//biz handlebars divishogidan foydalansak code miz oson o'qiladi 
app.get('/index', (req, res) => {
   // res.sendFile(path.join(__dirname, 'views' ,'index.html'));
   res.render('index')
});

app.get('/about', (req, res) => {
   // res.sendFile(path.join(__dirname,'views','about.html'));
   res.render('about');
});

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`server ${PORT} portda ishlamoqda`));
