import express from "express"
export const app = express();

app.use("/test", (req,res)=>{
res.send("<h2>Hello</h2>")
})