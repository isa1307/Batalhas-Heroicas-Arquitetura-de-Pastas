require('dotenv').config();
const express = require('express');
const app = express();
const heroisRoutes = require('./routes/heroisRoutes');
const port = process.env.PORT || 6000;


app.use(express.json());
app.use("/", heroisRoutes);

app.listen(port, () => {
    console.log(`rodando ${port}`);
});