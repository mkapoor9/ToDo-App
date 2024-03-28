const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mkpr2000:mkpr2000@cluster0.rq7irf3.mongodb.net/");
 
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
})

const todos = mongoose.model('Todos',todoSchema);

module.exports ={
    todos:todos,
}