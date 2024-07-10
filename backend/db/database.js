const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://poojapal88286:zAasKQjFO4f5j4Oa@cluster0.yzqcpzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("database connected");
}).catch(() => {
    console.log("Database Error");
})

module.exports= mongoose;