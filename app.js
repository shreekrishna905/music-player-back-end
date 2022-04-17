const express = require('express');
const User = require('./models/user');
const loginRouter = require('./routes/loginRoute')
const userRouter = require('./routes/userRoute')
const cors = require('cors');
const HTTP404Error = require('./errors/HTTP404Error');
const AccessDenied = require('./errors/AccessDenied');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/auth', loginRouter);

app.all('/api/*', function(req, res, next){
    const clientToken =  req.headers["x-access-token"];
    if (!User.hasAccess(clientToken)) {
        return res.status(400).send("Invalid token.");
    }
    next();
});

app.use('/api', userRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported for request method '+ req.method });
});


app.use((err, req, res, next) => {
    if (err instanceof HTTP404Error) {
        res.status(404).json(err);
    } else if(err instanceof AccessDenied){
        res.status(400).json(err);
    }else {
        console.error(err);
        res.status(500).json({ error: 'Something is wrong! Try later' });
    }
});

app.listen(3000, () => {
    console.log('Listening port 3000');
})