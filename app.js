import express from "express";
import chalk from "chalk";//ใส่สีข้อความ terminal
import debug from "debug"; // ดูเหตุการว่ามีอะไรเกิดขึ้นบ้าง  
import morgan from "morgan"; //ดูlog  
const app = express();
const port = 3800;

app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.send("Hello world Toon")
})

app.listen(port, () => {
    debug("listening on port" + chalk.red(" : "+port))
})