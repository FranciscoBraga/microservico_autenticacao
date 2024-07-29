import express, {Request,Response,NextFunction} from "express"

const app =  express();

//app.get chama uma função como callback
app.get('/status',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).send({foo:'Olá mundo!!'})

}); //resolver

//fica escultando na porta 3000
app.listen(3000,()=>{
    console.log("Aplicação funcionando na porta 3000!")
})
