const express=require("express");
const app=express();

app.use(express.json());

const{queryStringtoNumbers, doMean, doMedian, countOccurrences, doMode}=require("./helpers");
const{InvalidNumberError,InvalidRouteError}=require("./customErrors");

app.get("/",  (req,res) =>{
    console.log("here is home/route");
    return res.send("<h1> Welcome to the home page! Gimme back my son!!!!!!!!!</h1>")

})

app.get("/mean", function reportMean(req,res,next){
    try{
        if (!req.query.nums){
            console.log("throwing an invalid route error")
            throw new InvalidRouteError(" Bad Request!Missing nums query!Your route must contain a query string called nums that contains numbers separated by commmas! EX--> /median?nums=1,2,3",400)
        }
        const numsArr=queryStringtoNumbers(req.query.nums)
        console.log("here is the numsArr", numsArr)
        if (numsArr.includes(NaN)){
            throw new InvalidNumberError(" non numerical query found! There is a non integer or word present in your query please resubmit per the following conventio EX--> /median?nums=1,2,3",400)
        }
        let mean=doMean(numsArr)
        const meanResponse={"response:":{
            operation:"mean",
            value:`${mean}`
        }}
        return res.json(meanResponse)
    }
    catch(err){
        return next(err)
    } 
})

app.get("/mode", function reportMode(req,res,next){
    try{
        if (!req.query.nums){
            throw new InvalidRouteError(" Bad Request!Missing nums query!Your route must contain a query string called nums that contains numbers separated by commmas! EX--> /median?nums=1,2,3",400)
        }
        const numsArr=queryStringtoNumbers(req.query.nums)
        console.log("here is the numsArr", numsArr)
        if (numsArr.includes(NaN)){
            throw new InvalidNumberError(" non numerical query found! There is a non integer or word present in your query please resubmit per the following conventio EX--> /median?nums=1,2,3",400)
        }
        let mode=doMode(numsArr)
        const modeResponse={"response":{
            operation:"mode",
            value:`${mode}`
        }}
        return res.json(modeResponse)
    }
    catch(err){
        return next(err)
    } 
   
})

app.get("/median", function reportMedian(req,res,next){
    try{
        if (!req.query.nums){
            throw new InvalidRouteError(" Bad Request!Missing nums query!Your route must contain a query string called nums that contains numbers separated by commmas! EX--> /median?nums=1,2,3",400)
        }
        const numsArr=queryStringtoNumbers(req.query.nums)
        if (numsArr.includes(NaN)){
            throw new InvalidNumberError(" non numerical query found! There is a non integer or word present in your query please resubmit per the following conventio EX--> /median?nums=1,2,3",400)
        }
        const median=doMedian(numsArr)
        const medianResponse={response:{
        operation:"median",
        value:`${median}`
    }}
    return res.json(medianResponse)
    }
    catch(err){
        return next(err)
    } 
   
})

// 404 error handling if all routes are missed
app.use((req,res,next)=>{
    const e=new InvalidRouteError("Page Not Found", 404)
    next(e)
})

//global error handling 
app.use(function(err,req,res,next){
    let status=err.status || 500;
    let message=err.message
    return res.status(status).json({
        error:{message,status}
    })
})

app.listen(3000, function(){
    console.log("app running in port 3000!");
})