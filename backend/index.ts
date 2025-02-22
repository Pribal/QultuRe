import express from 'express';

// ENV
import 'dotenv/config';

// Routers
import UserRouter from './routers/User';
import CommerceRouter from './routers/Commerce';

const app = express();

app.use('/users', UserRouter);
app.use('/commerces', CommerceRouter);

app.listen(5000, () => {
    console.log("Backend running oh yes !");
})