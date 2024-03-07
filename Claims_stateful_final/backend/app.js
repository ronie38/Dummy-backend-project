const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error")

//import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const policyRoutes = require('./routes/policyRoutes');

// database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({limit: "5mb",
extended: true}));
app.use(cookieParser());
app.use(cors());

//Routes MiddleWare
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', policyRoutes)

//error middleware
app.use(errorHandler);

// port
const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
