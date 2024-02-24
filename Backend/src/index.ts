import express, {Request, Response} from 'express';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/api/test", async (req: Request, res: Response)=>{
    res.json({ message: "hello from express endpoint"})
})
const PORT = 5000;
app.listen(PORT,()=> {
 console.log(`Server is running on port:${PORT}`)
})