import connectDb from './config/db.js'
import courtRoutes from './routes/courtRoutes.js'
const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
app.use(cors());
app.use(express.json());

app.use("/courts",courtRoutes)

dotenv.config()
connectDb()
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>  console.log(`Server running on http://localhost:${PORT}`));