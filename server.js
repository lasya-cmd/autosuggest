const express = require("express");
const app = express();
const part = process.env.PORT || 6700;

app.use(express.static("frontend"));

app.listen(3000, function(){
    console.log("App running on http://localhost:3000" );
    
});
