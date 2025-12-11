const mongoose =require('mongoose')
const connectDb=async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      } catch(err){
        console.log(`MongoDB Error: ${err.message}`)
        process.exit()
      }
}
connectDb()