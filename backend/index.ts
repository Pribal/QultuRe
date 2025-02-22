import express from 'express';

// Routers
import UserRouter from './routers/User';

const app = express();

app.use('/users', UserRouter);

app.listen(5000, () => {
    console.log("Backend running oh yes !");
})