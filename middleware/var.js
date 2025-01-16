export default function(req,res,next){
  console.log(req.cookies.token)
  const isAuth =req.cookies.token ? true:false;
  
  res.locals.isauthenticated=isAuth
  next()  
}