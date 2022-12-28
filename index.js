const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const userRoute = require('./routers/userRoute');


//midleware 
app.use(cors());
app.use(express.json());

//route midleware
app.use('/api/auth', userRoute);

//home route
app.get('/', async (req, res) => {
    res.send('Home Page');
});

//mongoose connection to mongodb
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`server running on port ${process.env.PORT}`);
        });
    })
    .catch(err => console.log(err));