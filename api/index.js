import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose
   .connect(process.env.MONGO)
   .then(() => {
      console.log('Mongodb is connected');
   })
   .catch((err) => {
      console.log(err);
   });

const app = express()

app.listen(3000, () =>{
   console.log('server is running on 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// process.on("SIGINT", async () => {
//    await mongoose.connection.close();
//    console.log("MongoDB connection closed due to app termination.");
//    process.exit(0);
// });

app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error';
   res.status(statusCode).json({
      success: false,
      statusCode,
      message,
   });
});