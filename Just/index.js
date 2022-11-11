const express = require("express");
const app = express();

const middleware1 = (req, res, next) => {
    console.log("middleware1");
    next();
}


const middleware2 = (req, res, next) => {
    console.log("middleware2 is for Globally");
    next();
}
app.use(middleware2);

app.get('/link1', middleware1, (req, res) => {
    res.send("<h1>Link1 With middleware</h1>");
});

app.get('/link2', (req, res) => {
    res.send("<h1>Link 2 With middleware</h1>");
});

app.get('/link3', (req, res) => {
    res.send("<h1>Link3 With middleware</h1>");
});

app.listen(3000, () => {
    console.log("App is running");
})