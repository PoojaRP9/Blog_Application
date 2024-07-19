const {Schema,model} = require("mongoose")

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User = model('user',userSchema);


module.exports = User;